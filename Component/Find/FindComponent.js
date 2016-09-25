import React, {Component} from 'react';
import {
  View,
  navigator,
  StyleSheet,
} from 'react-native';

import NavigatorRootView from '../Main/NavigatorRootComponent';

import {connect} from 'react-redux';

class FindView extends Component {
  constructor(props) {
    super(props);
  }

  editCurrentFind() {
    console.log('edit find.');
  }

  render() {
    return (
      <NavigatorRootView
        title={'Find'}
        rightBarItemTitle={'edit'}
        rightBarItemAction={this.editCurrentFind.bind(this)}>
        <View style={{backgroundColor: 'yellow', height: 300}} />
      </NavigatorRootView>
      )
    }
  } export default FindView;
