import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './career-tree.styles.js';
import Position from './position/position';
import POSITIONS from './positions';
import PropTypes from 'prop-types';

/**
 * Component that represents career timeline
 * @param  {String} this.props.classes - List of jss classes
 * @param  {Func} this.props.isActiveSection - Method that checks for
 *                                               is it active section of Fullpage
 * 
 */
class CareerTree extends Component {

  // JSON list of positions from './positions.js'
  positions = POSITIONS;

  /**
   * Rendering list of position on timeline
   *   using POSITIONS as data and Position component as container
   * @return {Array} - list of React components
   */
  renderPositions() {
    return this.positions.map((position, i) => {
      return (
        <Position
          classes={this.props.classes}
          style={{display: `${i}s`}}
          position={position.position}
          company={position.company}
          year={position.year}
          link={position.link}
          key={i}
          index={i}
        />
      );
    });
  }

  render() {
    const classes = this.props.classes;
    return !this.props.isActiveSection() ? null :
    (
      <div className={classes.container + ' fadeInUp animated'}>
        <div className={classes.holder}>
            {this.renderPositions()}
        </div>
      </div>
    );
  }
}

// Typechecking
CareerTree.propTypes = {
  classes: PropTypes.object.isRequired,
  isActiveSection: PropTypes.func.isRequired
};

export default injectSheet(styles)(CareerTree);
