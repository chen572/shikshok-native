import { StyleSheet, Dimensions } from 'react-native';
const isBigScreen = Dimensions.get('window').width >= 400;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleStyle: {
    alignSelf: 'center',
    fontSize: isBigScreen ? 85 : 70,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    alignItems: 'flex-start',
    width: '75%',
  },
  socalLoginButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 100,
  },
  textStyle: {
    marginLeft: 9,
    fontSize: 18,
    marginBottom: 15,
    marginTop: 15,
  },
  loginButtonContainer: {
    alignItems: 'flex-start',
    width: 300,
    height: 170,
    marginTop: isBigScreen ? 50 : 0,
  },
  loginSocialButton: {
    marginLeft: isBigScreen ? 0 : 30,
    marginRight: isBigScreen >= 400 ? 10 : 5,
    width: 90,
    height: 75,
    borderRadius: 12,
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookIconStyle: {
    borderRadius: 5,
    marginRight: 6,
    marginBottom: 4,
  },
  googleIconStyle: {
    borderRadius: 25,
  },
  instagramIconStyle: {
    borderRadius: 13,
  },
  facebook: {
    backgroundColor: '#3c5a98',
  },
  google: {
    backgroundColor: '#ffffff',
  },
  instagram: {
    backgroundColor: '#b24063',
  },
  bottomPart: {
    marginBottom: '30%',
  },
  loginButtons: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 9,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  loginTextStyle: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 12,
    paddingBottom: 10,
  },
});
