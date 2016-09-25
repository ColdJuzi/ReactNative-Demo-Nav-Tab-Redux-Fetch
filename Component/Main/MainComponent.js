import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Tabs from 'react-native-tabs';
import TabBar from '../CustomUI/TabBar/TabBar';

import DeviceView from '../Device/DeviceComponent';
import ZonesView from '../Zones/ZonesComponent';
import FindView from '../Find/FindComponent';
import UserView from '../User/UserComponent';

import {connect} from 'react-redux';
import {queryUserDeviceWithBulbFetch} from '../../Model/Redux/Action';

class PhantomMainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 'Device',
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch && dispatch(queryUserDeviceWithBulbFetch());
  }

  changeCurrentTab(index) {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    let tabBarIdentifier = ['Device', 'Zones', 'Find', 'User'];
    let tabBarDetail = {
      'Device': {
        title: 'Device',
        unselectedImage: require('../../Resource/Image/Tab/vc_tab0.png'),
        selectedImage: require('../../Resource/Image/Tab/vc_tab0-selected.png'),
        component: DeviceView,
      },
      'Zones': {
        title: 'Zones',
        unselectedImage: require('../../Resource/Image/Tab/vc_tab1.png'),
        selectedImage: require('../../Resource/Image/Tab/vc_tab1-selected.png'),
        component: ZonesView,
      },
      'Find': {
        title: 'Find',
        unselectedImage: require('../../Resource/Image/Tab/vc_tab2.png'),
        selectedImage: require('../../Resource/Image/Tab/vc_tab2-selected.png'),
        component: FindView,
      },
      'User': {
        title: 'User',
        unselectedImage: require('../../Resource/Image/Tab/vc_tab3.png'),
        selectedImage: require('../../Resource/Image/Tab/vc_tab3-selected.png'),
        component: UserView,
      },
    };

    var Component = tabBarDetail[this.state.selectedIndex].component;
    const {navigator} = this.props;

    return (
      <View style={styles.container}>
        <Component navigator={navigator}/>
        <Tabs
          selected={this.state.selectedIndex}
          style={styles.tabs_container}
          onSelect={(index) => {
            this.changeCurrentTab(index.props.name);
          }}>
          {tabBarIdentifier.map((identifier, index) => {
            let tabDetailInfo = tabBarDetail[identifier];
            return (
              <TabBar
                key={index}
                name={identifier}
                title={tabDetailInfo.title}
                unselectedImage={tabDetailInfo.unselectedImage}
                selectedImage={tabDetailInfo.selectedImage}/>
            )
          })}
        </Tabs>
      </View>
    )
  }
}

PhantomMainView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(PhantomMainView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabs_container: {
    backgroundColor: '#1E1E2C',
  },
})
