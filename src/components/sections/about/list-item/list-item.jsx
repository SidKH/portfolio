import React from 'react';
import PropTypes from 'prop-types';

/**
 * List item component
 * @param  {Func} props.isActiveSection - Method to check if current section is active in fullpage
 * @param  {String} props.iconSrc       - Source of svg icon to show
 * @param  {Object} props.children      - React children to render
 */
const ListItem = (props) => {
  return !props.isActiveSection() ? null : (
    <div className={props.classes.listItem + ' fadeIn animated'}>
      <img className={props.classes.listIcon} src={props.iconSrc} alt="List item icon" />
      <div>
        {props.children}
      </div>
    </div>
  );
}

// Typechecking
ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  isActiveSection: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ListItem;