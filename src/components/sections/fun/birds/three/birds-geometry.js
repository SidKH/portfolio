import { BufferGeometry, BufferAttribute, Color } from 'three';

/**
 * Birds geometry
 * (https://github.com/mrdoob/three.js/blob/master/examples/webgl_gpgpu_birds.html)
 */
class BirdGeometry extends BufferGeometry {
  constructor(WIDTH) {
    super();
    this.WIDTH = WIDTH;
    this.BIRDS = WIDTH * WIDTH;
    var triangles = this.BIRDS * 3;
    var points = triangles * 3;
    var vertices = new BufferAttribute( new Float32Array( points * 3 ), 3 );
    var birdColors = new BufferAttribute( new Float32Array( points * 3 ), 3 );
    var references = new BufferAttribute( new Float32Array( points * 2 ), 2 );
    var birdVertex = new BufferAttribute( new Float32Array( points ), 1 );
    this.addAttribute( 'position', vertices );
    this.addAttribute( 'birdColor', birdColors );
    this.addAttribute( 'reference', references );
    this.addAttribute( 'birdVertex', birdVertex );
    // this.addAttribute( 'normal', new Float32Array( points * 3 ), 3 );
    var v = 0;
    function verts_push() {
      for (var i=0; i < arguments.length; i++) {
        vertices.array[v++] = arguments[i];
      }
    }
    var wingsSpan = 20;
    for (var f = 0; f<this.BIRDS; f++ ) {
      // Body
      verts_push(
        0, -0, -20,
        0, 4, -20,
        0, 0, 30
      );
      // Left Wing
      verts_push(
        0, 0, -15,
        -wingsSpan, 0, 0,
        0, 0, 15
      );
      // Right Wing
      verts_push(
        0, 0, 15,
        wingsSpan, 0, 0,
        0, 0, -15
      );
    }
    for( let v = 0; v < triangles * 3; v++ ) {
      var i = ~~(v / 3);
      var x = (i % this.WIDTH) / this.WIDTH;
      var y = ~~(i / this.WIDTH) / this.WIDTH;
      var c = new Color(0xffffff);
      birdColors.array[ v * 3 + 0 ] = c.r;
      birdColors.array[ v * 3 + 1 ] = c.g;
      birdColors.array[ v * 3 + 2 ] = c.b;
      references.array[ v * 2     ] = x;
      references.array[ v * 2 + 1 ] = y;
      birdVertex.array[ v         ] = v % 9;
    }
    this.scale( 0.2, 0.2, 0.2 );
  }
}

export default BirdGeometry;