import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Section from '../../section/section';
import styles from './home.styles.js';

/**
 * First section of portfolio
 */
class Home extends Section {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container + ' section'}>
          <div className={classes.holder}>
            {this.isActiveSection() &&
              <div className={classes.contentHolder + ' fadeIn animated'}>
                <span className={classes.info}>Alex Sidorenko</span>
                <h2 className={classes.heading}>
                  Simplicity<br/>
                  Is the <span className={classes.headingWord}>key</span>
                </h2>
                <span className={classes.info}>Javascript Developer</span>
              </div>
            }
          </div>
      </div>
    );
  }
}

// Typechecking
Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Home);
