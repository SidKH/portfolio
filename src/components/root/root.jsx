import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../common/reducer';
import App from '../app/app.container';
import styles from './root.styles';

// Create store
let store = createStore(reducer);

class Root extends Component {
  render() {
    return (

      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default injectSheet(styles)(Root);
