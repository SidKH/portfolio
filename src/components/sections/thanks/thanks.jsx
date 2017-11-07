import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Section from '../../section/section';
import styles from './thanks.styles.js';

/**
 * Latest section of portfolio
 */
class Thanks extends Section {
  CV_URL = 'https://docs.google.com/document/d/15xX_RQ9j5sUG19AoSt0Lzh1NBlNU_U_sL1jBQW6VfIs/edit?usp=sharing';
  GITHUB_URL = 'https://github.com/SidKH/portfolio';
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container + ' section'}>
        <div className={classes.holder}>
          {this.isActiveSection() && <div className={classes.contentHolder + ' fadeIn animated'}>
            <a href={this.CV_URL} target="_blank"
              className={classes.info}>CV for more info</a>
            <h2 className={classes.heading}>
              Thank<span className={classes.headingWord}>You</span>
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
