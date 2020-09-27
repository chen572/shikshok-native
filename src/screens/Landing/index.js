import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {LoginManager} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';
import LoginWithEmail from '../../components/Landing/LoginWithEmail';

GoogleSignin.configure({
  iosClientId:
    '267951812755-b88c0rc4s875hmrdeemh6v8hhg40pnom.apps.googleusercontent.com',
});

function Landing({navigation}) {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>WOW.</Text>
      <View style={styles.bottomPart}>
        <View style={styles.socialLoginContainer}>
          <Text style={styles.textStyle}>Get started with</Text>
          <View style={styles.socalLoginButtonsContainer}>
            <TouchableOpacity
              onPress={async () => {
                try {
                  await LoginManager.logInWithPermissions(['email']).then(
                    function (result) {
                      if (result.isCancelled) {
                        console.log('Login was cancelled');
                        navigation.navigate('Home');
                      } else {
                        console.log(result.grantedPermissions);
                        navigation.navigate('Home');
                      }
                    },
                    function (error) {
                      console.log('Login failed with error: ' + error);
                    },
                  );
                } catch (e) {
                  console.log(e);
                  navigation.navigate('Home');
                }
              }}
              style={[styles.loginSocialButton, styles.facebook]}>
              <Image
                style={styles.facebookIconStyle}
                source={{
                  uri:
                    'https://i.pinimg.com/originals/46/96/cd/4696cdbfc0bfb74e6566030459cebf9c.jpg',
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                await GoogleSignin.hasPlayServices();
                GoogleSignin.signIn()
                  .then((d) => {
                    console.log(d);
                    navigation.navigate('Home');
                  })
                  .catch((e) => {
                    console.log(e);
                    navigation.navigate('Home');
                  });
              }}
              style={[styles.loginSocialButton, styles.google]}>
              <Image
                style={styles.googleIconStyle}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png',
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={[styles.loginSocialButton, styles.instagram]}>
              <Image
                style={styles.instagramIconStyle}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
                  width: 35,
                  height: 35,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginButtonContainer}>
          <Text style={styles.textStyle}>Or sign up with</Text>
          <LoginWithEmail
            navigation={navigation}
            style={styles}
            text="Email"
            showInput={showPhoneInput}
          />
          <TouchableOpacity
            onPress={() => setShowPhoneInput(true)}
            style={styles.loginButtons}>
            <Text style={styles.loginTextStyle}>Phone</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Landing;
