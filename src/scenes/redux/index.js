import React, { Component } from 'react';
import MyShopping from './my-shopping';

import {Provider} from 'react-redux';
import store from './../../redux/store';

class ReduxScene extends Component {
  render() {
    return (
      <Provider store={store}>
          <MyShopping/>
        </Provider>
    )
  }
}

export default ReduxScene;