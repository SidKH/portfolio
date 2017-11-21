import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './split-letters.styles.js';

/**
 * Splitting word to separate letters
 *   incapsulated in spans
 */
class SplitLetters extends Component {
  componentWillMount(props) {
    this.prepareLetters();
  }

  /**
   * Splitting word by letters
   * @return {Array} array of React components with letters
   */
  prepareLetters() {
    const text = this.props.children;
    this.letters = [];
    for (let i = 0; i < text.length; i++) {
      const letter = text.charAt(i) === ' ' ? '\u00A0' : text.charAt(i);
      this.letters.push(
        <span
          data-text={letter}
          key={i}>
            {letter}
        </span>
      );
    }
  }

  render() {
    return (
      <span>
        {this.letters}
      </span>
    );
  }
}

// Typechecking
SplitLetters.propTypes = {
  children: PropTypes.node.isRequired
};

export default injectSheet(styles)(SplitLetters);
