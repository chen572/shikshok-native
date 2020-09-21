import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

function VideoDescription({itemName, description}) {
  return (
    <View style={styles.videoDescriptionContainer}>
      <TouchableOpacity>
        <Text style={styles.itemNameStyle}>{itemName}</Text>
        <Text style={styles.descriptionTextStyle}>{description}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default VideoDescription;
