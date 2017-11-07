import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import CareerTree from './career-tree/career-tree';
import Section from '../../section/section';
import styles from './career.styles';

/**
 * Career section
 */
class Career extends Section {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container + ' section'}>
          <div className={classes.holder}>
            <div className={classes.contentHolder}>
              {this.isActiveSection() &&
                <h2 className={classes.heading + ' fadeInDown animated'}>
                  Career
                  <span className={classes.headingWord}>Timeline</span>
                </h2>
              }
              <CareerTree isActiveSection={() => this.isActiveSection()} />
            </div>
          </div>
      </div>
    );
  }
}

// Typechecking
Career.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Career);
