import React, {Component} from 'react';

import {
  Navigator,
  View,
} from 'react-native';

import PhantomMainView from './Component/Main/MainComponent';

class RootView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var defaultName = 'PhantomMainView';
    var defaultComponent = PhantomMainView;
    const CustomPushRemoveGestures = Object.assign(
      {},
      Navigator.SceneConfigs.PushFromRight,
      {gestures: {}});

      return (
        <Navigator
          initialRoute={{name: defaultName, component: defaultComponent}}
          configureScene={(route, routeStack) => {
            return route.sceneConfig ? route.sceneConfig : CustomPushRemoveGestures;
          }}
          renderScene={(route, navigator) => {
            var Component = route.component;
            return (<Component {...route.params} navigator={navigator}/>)
          }
        } />
      )
    }
  } export default RootView;
