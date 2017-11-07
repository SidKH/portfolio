import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import BirdsThreeJS from './three/birds-three';
import styles from './birds.styles';
import debounce from 'debounce';

/**
 * React component for Three.js birds rendering
 */
class Birds extends Component {

  componentDidMount() {

    // Re-rendering birds with debouncing on resize to prevent poor performance
    window.addEventListener('resize', debounce(() => this.onResize(), 500)) 
  }

  /**
   * Re-render birds component on resize
   *   to keep responsive dimensions
   */
  onResize() {
    if (this.props.isActiveSection()) {
      this.destroyBirds();
      this.renderBirds();
    }
  }

  /**
   * Destroy birds compoonent
   *   (stop all animations and remove html)
   */
  destroyBirds() {
    this.birds && this.birds.destroy();
  }

  /**
   * Render birds from Three.js if section is active
   *   and destroy them if not (to keep great performance for other components)
   */
  renderBirds() {
    if (this.props.isActiveSection()) {
      this.birds = new BirdsThreeJS(this.node);
    } else {
      this.destroyBirds();
    }
  }

  render() {
    const classes = this.props.classes;
    this.renderBirds();

    // Providing smooth fadeIn of Birds component
    const maskAnimation = this.props.isActiveSection() ? 'fadeOut animated' : '';

    return (
      <div className={classes.container}>
        <div className={classes.birdsHolder} ref={(node) => this.node = node}></div>
        <div className={`${classes.mask} ${maskAnimation}`}></div>
      </div>
    );
  }
}

// Typechecking
Birds.propTypes = {
  classes: PropTypes.object.isRequired,
  isActiveSection: PropTypes.func.isRequired
};

export default injectSheet(styles)(Birds);
