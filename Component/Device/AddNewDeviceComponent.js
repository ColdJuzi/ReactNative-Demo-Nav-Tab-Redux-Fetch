import React, {Component} from 'react';
import {
  View,
  navigator,
  StyleSheet,
} from 'react-native';

import NavigatorRootView from '../Main/NavigatorRootComponent';

import {connect} from 'react-redux';

class AddNewDeviceView extends Component {
  constructor(props) {
    super(props);
  }

  onPressPop() {
    const {navigator} = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render() {
    return (
      <NavigatorRootView
        title={'Add Device'}
        leftBarItemTitle={'返回'}
        leftBarItemAction={this.onPressPop.bind(this)}>
        <View style={{backgroundColor: 'red', height: 300}} />
      </NavigatorRootView>
      )
    }
  } export default AddNewDeviceView;
