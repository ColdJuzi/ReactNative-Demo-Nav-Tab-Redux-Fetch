import React, {Component} from 'react';
import {
  View,
  navigator,
  StyleSheet,
} from 'react-native';

import NavigatorRootView from '../Main/NavigatorRootComponent';

import {connect} from 'react-redux';

class ZonesView extends Component {
  constructor(props) {
    super(props);
  }

  deleteCurrentZones() {
    console.log('delete current zones.');
  }

  render() {
    return (
      <NavigatorRootView
        title={'Zones'}
        rightBarItemTitle={'delete'}
        rightBarItemAction={this.deleteCurrentZones.bind(this)}>
        <View style={{backgroundColor: 'green', height: 300}} />
      </NavigatorRootView>
      )
    }
  } export default ZonesView;
