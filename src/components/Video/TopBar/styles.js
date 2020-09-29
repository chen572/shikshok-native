import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  topButtons: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    top: '5%',
    zIndex: 99,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    color: '#fff',
  },
  topBoldText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
});
