import React from 'react';
import PropTypes from 'prop-types';

/**
 * Single posiiton component
 * @param  {String} props.classes   - List of jss classes
 * @param  {String} props.link      - Link to an external resource of the position
 * @param  {String} props.position  - Position description
 * @param  {String} props.company   - Company name
 * @param  {String} props.year      - Start year of the position
 * @return {object}                 - React component
 */
const Position = (props) => {
  return (
    <div className={props.classes.position + ' fadeIn animated'}>
      <div className={props.classes.positionHolder}>
        <a href={props.link} target="_blank" className={props.classes.positionLink}>
          <span className={props.classes.positionInfo}>{props.position}<span className={props.classes.company}>{props.company}</span></span>
          <span className={props.classes.positionYear}>{props.year}</span>
        </a>
      </div>
    </div>
  );
}

// Typechecking
Position.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Position;