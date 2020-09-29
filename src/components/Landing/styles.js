import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalStyle: {
    width: '90%',
    height: '35%',
    alignSelf: 'center',
  },
  surfaceStyle: {
    elevation: 12,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  innerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
  },
  titleStyle: {
    marginBottom: 10,
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    fontSize: 18,
    flex: 1,
  },
  containerStyle: {
    height: 50,
    width: '100%',
  },
  errorMsgStyle: {
    color: 'red',
  },
});
