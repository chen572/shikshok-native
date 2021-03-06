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
  },
  captureContainer: {
    flex: 2,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightToolbarContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryButtonContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    position: 'absolute',
    bottom: 40,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    padding: 7.5,
    alignSelf: 'center',
    margin: 20,
    backgroundColor: 'transparent',
  },
  video: {
    backgroundColor: 'red',
  },
  picture: {
    backgroundColor: 'transparent',
  },
  flashIconStyle: {
    position: 'absolute',
    bottom: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    backgroundColor: 'transparent',
  },
  cameraChangeIconStyle: {
    position: 'absolute',
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    backgroundColor: 'transparent',
  },
  captureTextStyle: {
    position: 'absolute',
    bottom: 30,
    fontSize: 10,
    color: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 4,
    backgroundColor: 'transparent',
  },
  galleryAvatarImage: {
    position: 'absolute',
    bottom: 67.5,
    width: 60,
    height: 60,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: 'transparent',
  },
});
