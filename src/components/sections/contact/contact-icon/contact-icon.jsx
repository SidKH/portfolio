import React from 'react';
import PropTypes from 'prop-types';

/**
 * Contact link with an icon
 * @param  {Func} props.isActiveSection - Checking if current section is active in fullpage
 * @param  {String} props.href          - Url for the link
 * @param  {String} props.iconSrc       - Src of svg for the icon
 */
const ContactIcon = (props) => {
  return !props.isActiveSection() ? null : (
    <a className={props.classes.iconLink + ' fadeIn animated'}
      target="_blank"
      href={props.href}>
      <img src={props.iconSrc} alt="Contact icon" />
    </a>
  );
}

// Typechecking
ContactIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  isActiveSection: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired
};

export default ContactIcon;