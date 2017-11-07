import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Section from '../../section/section';
import styles from './contact.styles.js';
import MailSvg from '../../../common/icons/mail.svg';
import LinkedinSvg from '../../../common/icons/linkedin.svg';
import AngelSvg from '../../../common/icons/angel-list.svg';
import ContactIcon from './contact-icon/contact-icon';
import { preloadImages } from '../../../common/helpers';

// Preloading icons
preloadImages([MailSvg, LinkedinSvg, AngelSvg]);

/**
 * Contact information sections
 *   renering links to different social networks
 */
class Contact extends Section {

  /**
   * List of links data to represent
   * @type {Array}
   */
  links = [
    {
      iconSrc: MailSvg,
      href: 'mailto:my.mail.kharkov@gmail.com'
    },
    {
      iconSrc: LinkedinSvg,
      href: 'https://www.linkedin.com/in/alexander-sidorenko-32b435b3/'
    },
    {
      iconSrc: AngelSvg,
      href: 'https://angel.co/alexander-sidorenko-1?public_profile=1'
    }
  ];

  /**
   * Render links using links data and ContactIcon component
   * @return {Array} - List of React elements
   */
  renderLinks() {
    return this.links.map((link, i) => {
      return (
        <ContactIcon
          classes={this.props.classes}
          isActiveSection={() => this.isActiveSection()}
          iconSrc={link.iconSrc}
          href={link.href}
          key={i}
          index={i}
          />
      );
    });
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container + ' section'}>
        <div className={classes.contentHolder}>
          <div className={classes.partA}>
            {this.isActiveSection() && <h2 className={classes.heading + ' fadeIn animated'}>
              Get in
              <span className={classes.headingWord}>Touch</span>
            </h2>}
          </div>
          <div className={classes.partB}>
            <div className={classes.icons}>
              {this.renderLinks()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Typechecking
Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
