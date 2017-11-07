import { connect } from 'react-redux';
import App from './app.jsx';
import { setActiveSection } from './app.actions.js';

const mapStateToProps = (state) => {
  return {
    activeSection: state.App.activeSection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveSection: (key) => dispatch(setActiveSection(key))
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;