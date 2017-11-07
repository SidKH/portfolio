import { Component } from 'react';

/**
 * Common section component
 *   that should be extended for any existed section component
 *   in order to utiize shared inner methods
 */
class Section extends Component {
  isActiveSection() {
    return this.props.section === this.props.activeSection;
  }
}

export default Section;