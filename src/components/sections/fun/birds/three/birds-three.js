import {
  PerspectiveCamera,
  Color,
  Scene,
  Fog,
  WebGLRenderer,
  ShaderMaterial,
  DoubleSide,
  Mesh,
  Vector3,
  RepeatWrapping
} from 'three';
import BirdGeometry from './birds-geometry';
import { fragmentShaderVelocity, fragmentShaderPosition, birdVS, birdFS } from './shaders';
import GPUComputationRenderer from './gpu-computation-renderer';

/**
 * Birds component from Three.js examples which was
 *   completely refactored into ES6 class
 *   Original - (https://github.com/mrdoob/three.js/blob/master/examples/webgl_gpgpu_birds.html)
 */
class BirdsThreeJS {
  WIDTH = 5;
  BOUNDS = 800;
  BOUNDS_HALF = this.BOUNDS / 2;
  mouseX = 0;
  mouseY = 10000;
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  constructor(node) {
    this.init(node);
  }

  /**
   * Initialize
   * @param  {Object} node - DOM node in which birds will be rendered
   */
  init(node) {
    this.container = node;
    this.running = true;
    this.width = node.offsetWidth;
    this.height = node.offsetHeight;
    this.last = performance.now();
    this.camera = new PerspectiveCamera( 15, this.width / this.height, 1, 3000 );
    this.camera.position.z = 350;
    this.scene = new Scene();
    this.scene.background = new Color( 0xF86942 );
    this.scene.fog = new Fog( 0xffffff, 100, 1000 );
    this.renderer = new WebGLRenderer();
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( this.width, this.height );
    this.initComputeRenderer();
    this.initBirds();
    this.animate();
    this.attach(node);
  }

  /**
   * Animate birds with requestAnimationFrame recursion 
   */
  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  /**
   * Init GPU compute renderer
   */
  initComputeRenderer() {
    this.gpuCompute = new GPUComputationRenderer( 64, 64, this.renderer );
    const dtPosition = this.gpuCompute.createTexture();
    const dtVelocity = this.gpuCompute.createTexture();
    this.fillPositionTexture( dtPosition );
    this.fillVelocityTexture( dtVelocity );
    this.velocityVariable = this.gpuCompute.addVariable( "textureVelocity", fragmentShaderVelocity, dtVelocity );
    this.positionVariable = this.gpuCompute.addVariable( "texturePosition", fragmentShaderPosition, dtPosition );
    this.gpuCompute.setVariableDependencies( this.velocityVariable, [ this.positionVariable, this.velocityVariable ] );
    this.gpuCompute.setVariableDependencies( this.positionVariable, [ this.positionVariable, this.velocityVariable ] );
    this.positionUniforms = this.positionVariable.material.uniforms;
    this.velocityUniforms = this.velocityVariable.material.uniforms;
    this.positionUniforms.time = { value: 0.0 };
    this.positionUniforms.delta = { value: 0.0 };
    this.velocityUniforms.time = { value: 1.0 };
    this.velocityUniforms.delta = { value: 0.0 };
    this.velocityUniforms.testing = { value: 1.0 };
    this.velocityUniforms.seperationDistance = { value: 1.0 };
    this.velocityUniforms.alignmentDistance = { value: 1.0 };
    this.velocityUniforms.cohesionDistance = { value: 1.0 };
    this.velocityUniforms.freedomFactor = { value: 1.0 };
    this.velocityUniforms.predator = { value: new Vector3() };
    this.velocityVariable.material.defines.BOUNDS = this.BOUNDS.toFixed( 2 );
    this.velocityVariable.wrapS = RepeatWrapping;
    this.velocityVariable.wrapT = RepeatWrapping;
    this.positionVariable.wrapS = RepeatWrapping;
    this.positionVariable.wrapT = RepeatWrapping;
    const error = this.gpuCompute.init();
    if ( error !== null ) {
      console.error(error);
    }
  }

  /**
   * Fill position texture
   * @param  {Object} texture - texture object
   */
  fillPositionTexture(texture) {
    let theArray = texture.image.data;
    for ( let k = 0, kl = theArray.length; k < kl; k += 4 ) {
      const x = Math.random() * this.BOUNDS - this.BOUNDS_HALF;
      const y = Math.random() * this.BOUNDS - this.BOUNDS_HALF;
      const z = Math.random() * this.BOUNDS - this.BOUNDS_HALF;
      theArray[ k + 0 ] = x;
      theArray[ k + 1 ] = y;
      theArray[ k + 2 ] = z;
      theArray[ k + 3 ] = 1;
    }
  }

  /**
   * Fill velocity texture
   * @param  {Object} texture - texture object
   */
  fillVelocityTexture(texture) {
    let theArray = texture.image.data;
    for ( let k = 0, kl = theArray.length; k < kl; k += 4 ) {
      const x = Math.random() - 0.5;
      const y = Math.random() - 0.5;
      const z = Math.random() - 0.5;
      theArray[ k + 0 ] = x * 10;
      theArray[ k + 1 ] = y * 10;
      theArray[ k + 2 ] = z * 10;
      theArray[ k + 3 ] = 1;
    }

  }

  /**
   * Appending birds canvas to provided DOM node
   * @param  {Object} node - DOM node
   */
  attach(node) {
    node.innerHTML = '';
    node.appendChild(this.renderer.domElement)
  }

  /**
   * Render birds into canvas
   */
  render() {
    const now = performance.now();
    let delta = (now - this.last) / 1000;
    if (delta > 1) delta = 1; // safety cap on large deltas
    this.last = now;
    this.positionUniforms.time.value = now;
    this.positionUniforms.delta.value = delta;
    this.velocityUniforms.time.value = now;
    this.velocityUniforms.delta.value = delta;
    this.birdUniforms.time.value = now;
    this.birdUniforms.delta.value = delta;
    this.velocityUniforms.predator.value.set( 0.5 * this.mouseX / this.windowHalfX, - 0.5 * this.mouseY / this.windowHalfY, 0 );
    this.mouseX = 10000;
    this.mouseY = 10000;
    this.gpuCompute.compute();
    this.birdUniforms.texturePosition.value = this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture;
    this.birdUniforms.textureVelocity.value = this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;
    this.renderer.render(this.scene, this.camera)

  }

  /**
   * Initialize birds in Three scene
   */
  initBirds() {
    this.geometry = new BirdGeometry(this.WIDTH);

    // For Vertex and Fragment
    this.birdUniforms = {
      color: { value: new Color( 0xff2200 ) },
      texturePosition: { value: null },
      textureVelocity: { value: null },
      time: { value: 1.0 },
      delta: { value: 0.0 }
    };
    // ShaderMaterial
    this.material = new ShaderMaterial( {
      uniforms:       this.birdUniforms,
      vertexShader:   birdVS,
      fragmentShader: birdFS,
      side: DoubleSide
    });
    var birdMesh = new Mesh( this.geometry, this.material );
    birdMesh.rotation.y = Math.PI / 2;
    birdMesh.matrixAutoUpdate = false;
    birdMesh.updateMatrix();
    this.scene.add(birdMesh);
  }

  /**
   * Destroy birds component to clear memory
   */
  destroy() {
    this.container.innerHTML = '';
    cancelAnimationFrame(this.frameId);
  }
}

export default BirdsThreeJS;