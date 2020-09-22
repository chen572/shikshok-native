import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 70,
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
  },
  loginSocialButton: {
    width: 90,
    height: 75,
    borderRadius: 12,
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
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
    shadowOffset: {width: 2, height: 5},
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
