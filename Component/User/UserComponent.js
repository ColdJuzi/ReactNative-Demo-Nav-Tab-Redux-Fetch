import React, {Component} from 'react';
import {
  View,
  navigator,
  StyleSheet,
} from 'react-native';

import NavigatorRootView from '../Main/NavigatorRootComponent';

import {connect} from 'react-redux';

class UserView extends Component {
  constructor(props) {
    super(props);
  }

  updateUserSettig() {
    console.log('update user setting.');
  }

  render() {
    return (
      <NavigatorRootView
        title={'User'}
        rightBarItemTitle={'setting'}
        rightBarItemAction={this.updateUserSettig.bind(this)}>
        <View style={{backgroundColor: 'aqua', height: 300}} />
      </NavigatorRootView>
      )
    }
  } export default UserView;
