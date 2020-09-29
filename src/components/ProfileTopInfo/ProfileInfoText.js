import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileInfoText({ text, amount }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textNumberStyle}>{amount}</Text>
      <Text style={styles.textDescriptionStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    width: '30%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNumberStyle: {
    color: '#010101',
    fontWeight: 'bold',
  },
  textDescriptionStyle: {
    marginTop: 10,
    color: '#333',
  },
});

export default ProfileInfoText;
