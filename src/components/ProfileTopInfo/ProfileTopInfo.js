import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileInfoText from './ProfileInfoText';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function ProfileTopInfo({ name, following, followers, likes }) {
  return (
    <>
      <View>
        <Text style={styles.userNameStyle}>{name}</Text>
      </View>
      <View style={styles.userInfoTextContainer}>
        <ProfileInfoText text="Following" amount={following} />
        <ProfileInfoText text="Followers" amount={followers} />
        <ProfileInfoText text="Likes" amount={likes} />
      </View>
      <View style={styles.userEditContainer}>
        <TouchableOpacity style={styles.userEditButton}>
          <Text style={styles.userEditButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userEditFavoriteButton}>
          <FontAwesomeIcon icon={faBookmark} size={20} color="#333" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.userAddBio}>
        <Text style={styles.userAddBioText}>Tap to add bio</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  userNameStyle: {
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  userInfoTextContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userEditContainer: {
    marginTop: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userEditButton: {
    width: '60%',
    height: 52,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#333',
  },
  userEditButtonText: {
    color: '#333',
  },
  userEditFavoriteButton: {
    marginLeft: 10,
    width: '15%',
    display: 'flex',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#333',
    padding: 15,
  },
  userAddBio: {
    marginLeft: 10,
    display: 'flex',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  userAddBioText: {
    color: '#333',
  },
});

export default ProfileTopInfo;
