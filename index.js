'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';

import {Provider} from 'react-redux';
import configureStore from './Model/Redux/ConfigureStore';
import WangGuanMenReducer from './Model/Redux/Reducer';

import RootView from './RootView.js';

const store = configureStore();

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <RootView />
      </Provider>
    )
  }
} export default App;

AppRegistry.registerComponent('iOSReactNativeDemo', () => App);
