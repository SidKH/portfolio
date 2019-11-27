import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Section from '../../section/section';
import DoneSvgSrc from '../../../common/icons/done.svg';
import QalitySvgSrc from '../../../common/icons/apps.svg';
import LoveSvgSrc from '../../../common/icons/favorite.svg';
import ListItem from './list-item/list-item';
import styles from './about.styles.js';
import { preloadImages } from '../../../common/helpers';

// Preloading icons
preloadImages([DoneSvgSrc, QalitySvgSrc, LoveSvgSrc]);

/**
 * Section with additional information
 */
class About extends Section {

  /**
   * Data for bullet points of description
   * @type {Array}
   */
  listItems = [
    {
      topLine: 'Getting',
      bottomLine: 'it Done',
      iconSrc: DoneSvgSrc
    },
    {
      topLine: 'Quantity',
      bottomLine: 'Quality',
      iconSrc: QalitySvgSrc,
      className: this.props.classes.qq
    },
    {
      topLine: 'The craft',
      bottomLine: 'The result',
      iconSrc: LoveSvgSrc
    }
  ];

  /**
   * Rendering bulletpoints using data from listItems and ListItem component
   * @return {Array} - List of react components
   */
  renderListItems() {
    return this.listItems.map((listItem, i) => {
      return (
        <ListItem
          isActiveSection={() => this.isActiveSection()}
          classes={this.props.classes}
          className={listItem.className}
          iconSrc={listItem.iconSrc}
          index={i}
          key={i}>
            <span>{listItem.topLine}</span>
            <span>{listItem.bottomLine}</span>
        </ListItem>
      );
    });
  }
  
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container + ' section'}>
          <div className={classes.holder}>
            <div className={classes.partA}>
                {this.isActiveSection() &&
                  <h2 className={classes.heading + ' fadeInLeft animated'}>
                    A few words 
                    <span className={classes.headingWord}>about...</span>
                  </h2>
                }
            </div>
            <div className={classes.partB}>
              <div className={classes.list}>
                {this.renderListItems()}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

// Typechecking
About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(About);
