import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  videoDescriptionContainer: {
    position: 'absolute',
    padding: 10,
    left: 5,
    bottom: '15%',
    zIndex: 99,
    width: '75%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  itemNameStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  descriptionTextStyle: {
    color: '#fff',
    marginTop: 10,
  },
});
