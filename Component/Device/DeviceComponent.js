import React, {Component, PropTypes} from 'react';
import {
  View,
  navigator,
  StyleSheet,
} from 'react-native';

import NavigatorRootView from '../Main/NavigatorRootComponent';
import AddNewDeviceView from './AddNewDeviceComponent';

import {connect} from 'react-redux';

class DeviceView extends Component {
  constructor(props) {
    super(props);
  }

  addNewDevice() {
    const {navigator} = this.props;
    if (navigator) {
      navigator.push({
        name: 'AddNewDeviceView',
        component: AddNewDeviceView,
      });
    }
  }

  render() {
    const {bulbInfoList} = this.props;
    console.log(bulbInfoList);
    return (
      <NavigatorRootView
        title={'Device'}
        rightBarItemTitle={'add'}
        rightBarItemAction={this.addNewDevice.bind(this)}>
        
      </NavigatorRootView>
      )
    }
  }

  DeviceView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    bulbInfoList: PropTypes.array.isRequired,
  };

  function mapStateToProps(state) {
    return {
      bulbInfoList: state.PhantomDeviceBulbInfo,
    };
  }

  export default connect(mapStateToProps)(DeviceView);
