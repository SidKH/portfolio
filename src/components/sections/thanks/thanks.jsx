import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Section from '../../section/section';
import PeeledText from '../../peeled-text/peeled-text';
import styles from './thanks.styles.js';

/**
 * Latest section of portfolio
 */
class Thanks extends Section {
  RESUME_URL = 'https://docs.google.com/document/d/1oqGhsFm0FTWQG1MRb0wYRDVcxXgJvc5LSuVHh7uWFe8/edit?usp=sharing';
  GITHUB_URL = 'https://github.com/SidKH/portfolio';
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container + ' section'}>
        <div className={classes.holder}>
          {this.isActiveSection() && <div className={classes.contentHolder + ' fadeIn animated'}>
            <a href={this.RESUME_URL} target="_blank"
              className={classes.info}>Resume for more info</a>
            <h2 className={classes.heading}>
              Thank&nbsp;
              <span className={classes.headingWord}>
                <PeeledText>YOU</PeeledText>
              </span>
            </h2>
            <a href={this.GITHUB_URL} target="_blank"
              className={classes.info}>Check code on GitHub</a>
          </div>}
        </div>
      </div>
    );
  }
}

// Typechecking
Thanks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Thanks);
