import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Section from '../../section/section';
import Birds from './birds/birds';
import styles from './fun.styles.js';

/**
 * 'Just for fun' section
 */
class Fun extends Section {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container + ' section'}>
          <div className={classes.contentHolder}>
            <div className={classes.partA}></div>
            <div className={classes.partBCHolder}>
            <div className={classes.partB}>
              <Birds isActiveSection={() => this.isActiveSection()} />
            </div> 
            <div className={classes.partC}>
              {this.isActiveSection() && <h2 className={classes.heading + ' fadeIn animated'}>
                Let's create something incredible together
              </h2>}
            </div>
            </div>
          </div>
      </div>
    );
  }
}

// Typechecking
Fun.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Fun);
