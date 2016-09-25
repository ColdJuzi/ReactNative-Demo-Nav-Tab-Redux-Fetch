import React, {Component, PropTypes} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

class TabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tabBarIconImage = this.props.selected ? this.props.selectedImage : this.props.unselectedImage;
    let tabBarTitleColor = this.props.selected ? '#FFFFFF' : '#5E5E5E';
    return (
      <View style={styles.container}>
        <Image
          source={tabBarIconImage}
          style={styles.image_container} />
        <Text
          style={[styles.text_container, {color: tabBarTitleColor}]}>
          {this.props.title}
        </Text>
      </View>
    )
  }
} export default TabBar;

TabBar.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.bool,
  selectedImage: PropTypes.number,
  unselectedImage: PropTypes.number,
};

TabBar.defaultProps = {
  title: 'Unkown',
  selected: false,
  unselectedImage: require('../../../Resource/Image/Tab/vc_tab0.png'),
  selectedImage: require('../../../Resource/Image/Tab/vc_tab0-selected.png'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image_container: {
    marginTop: 5,
    marginBottom: 3,
    width: 24,
    height: 24,
  },
  text_container: {
    fontWeight: '400',
    textAlign: 'center',
  },

})
