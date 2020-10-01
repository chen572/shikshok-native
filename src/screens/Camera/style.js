import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  toolbarContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  preview: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    position: 'absolute',
    bottom: 60,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 100,
    padding: 7.5,
    alignSelf: 'center',
    margin: 20,
  },
  video: {
    backgroundColor: 'red',
  },
  picture: {
    backgroundColor: 'transparent',
  },
});
