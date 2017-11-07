import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from '../sections/home/home';
import Career from '../sections/career/career';
import About from '../sections/about/about';
import Fun from '../sections/fun/fun';
import Contact from '../sections/contact/contact';
import Thanks from '../sections/thanks/thanks';
import IeMask from '../ie-mask/ie-mask';
import { isIE } from '../../common/helpers';
import 'animate.css';
import $ from 'jquery';
import 'fullpage.js';

/**
 * Main component of portfolio
 */
class App extends Component {

  /**
   * List of section that will be rendered
   *   in specified order
   * @type {Array}
   */
  sections = [
    {key: 'HOME', component: Home},
    {key: 'CAREER', component: Career},
    {key: 'ABOUT', component: About},
    {key: 'FUN', component: Fun},
    {key: 'CONTACT', component: Contact},
    {key: 'THANKS', component: Thanks}
  ]

  componentDidMount() {
    this.initFullPage();
  }

  /**
   * Init full page js behavior
   *   dispatching an event after load of each page
   *   to keep track of the active page on the screen
   */
  initFullPage() {
    $(this.container).fullpage({
      lazyLoading: false,
      afterLoad: (anchorLink, index) => {

        // Initial index in afterLoad of Fullpage is 1
        this.props.setActiveSection(this.sections[index - 1].key);

      }
    });
  }

  /**
   * Render all section.
   * Passing section and activeSection params
   *   for a section to know it's position
   * @return {Array} List of React elements
   */
  renderSections() {
    return this.sections.map((section) => {
      const Component = section.component;
      return (
        <Component
          key={section.key}
          section={section.key}
          activeSection={this.props.activeSection} />
      );
    });
  }
  
  render() {
    if (isIE) { return <IeMask/> }
    return (
      <div ref={(container) => this.container = container }>
        {this.renderSections()}
      </div>
    );
  }
}

// Typechecking
App.propTypes = {
  setActiveSection: PropTypes.func,
  activeSection: PropTypes.string
};

export default App;