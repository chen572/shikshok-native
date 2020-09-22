import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

function Landing() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>WOW.</Text>
      <View style={styles.bottomPart}>
        <View style={styles.socialLoginContainer}>
          <Text style={styles.textStyle}>Get started with</Text>
          <View style={styles.socalLoginButtonsContainer}>
            <TouchableOpacity
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
            <TouchableOpacity style={[styles.loginSocialButton, styles.google]}>
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
          <TouchableOpacity style={styles.loginButtons}>
            <Text style={styles.loginTextStyle}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButtons}>
            <Text style={styles.loginTextStyle}>Phone</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Landing;
