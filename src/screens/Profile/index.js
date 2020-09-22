import React from 'react';
import {ScrollView, SafeAreaView, Image} from 'react-native';
import BottomTabNavigator from '../../components/BottomTabNavigator/BottomTabNavigator';
import ProfileTopInfo from '../../components/ProfileTopInfo/ProfileTopInfo';
import styles from './styles';

function Profile({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Image
          style={styles.imageStyle}
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/21/21104.png',
          }}
        />
        <ProfileTopInfo />
      </ScrollView>
      <BottomTabNavigator
        background="#010101"
        colorIcon="#FFF"
        colorTitle="#FFF"
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

export default Profile;
