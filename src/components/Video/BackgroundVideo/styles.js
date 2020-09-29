import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  videoStyle: {
    alignItems: 'stretch',
    height: Dimensions.get('window').height,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  iconStyle: {
    zIndex: 999,
    opacity: 0.8,
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
    bottom: '40%',
    left: '40%',
    right: '40%',
  },
});
