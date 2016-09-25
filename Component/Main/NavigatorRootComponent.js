import React, {Component, PropTypes} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class NavigatorRootView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderNavigatorBarItem = function(barTitle, target) {
      let barTitleColor = barTitle ? '#FFFFFF' : '#1E1E2C';
      return (
        <TouchableHighlight
          onPress={() => {
            target ? target() : null; 
          }}
          underlayColor='transparent'
          disabled={!barTitle}
          style={styles.navigator_bar_item_container}>
          <Text style={[styles.navigator_bar_text_container, {color: barTitleColor}]}>
            {barTitle ? barTitle : ''}
          </Text>
        </TouchableHighlight>
      )
    }

    let renderNavigatorTitle = function(title) {
      return (
        <View style={styles.navigator_title_container}>
          <Text style={styles.navigator_bar_text_container}>
            {title}
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.state_container} />
        <View style={styles.navigator_bar_container}>
          {renderNavigatorBarItem(this.props.leftBarItemTitle, this.props.leftBarItemAction)}
          {renderNavigatorTitle(this.props.title)}
          {renderNavigatorBarItem(this.props.rightBarItemTitle, this.props.rightBarItemAction)}
        </View>
        {this.props.children}
      </View>
    )
  }
} export default NavigatorRootView;

NavigatorRootView.propTypes = {
  title: PropTypes.string,
};

NavigatorRootView.defaultProps = {
  title: 'Unkown',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  state_container: {
    height: 20,
    backgroundColor: '#1E1E2C',
  },
  navigator_bar_container: {
    height: 44,
    backgroundColor: '#1E1E2C',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navigator_bar_item_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator_title_container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator_bar_text_container: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
  },
})
