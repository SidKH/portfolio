import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import SplitLetters from '../split-letters/split-letters';
import styles from './peeled-text.styles.js';

/**
 * Making animation of peeled text with sequence delay and hover effects.
 *   inspired by https://codepen.io/Michiel/pen/OPPKMr
 */
class PeeledText extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <span className={classes.container}>
        <SplitLetters>{this.props.children}</SplitLetters>
      </span>
    );
  }
}

// Typechecking
PeeledText.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default injectSheet(styles)(PeeledText);
