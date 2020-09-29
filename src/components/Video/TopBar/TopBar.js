import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function TopBar() {
  return (
    <View style={styles.topButtons}>
      <Text style={styles.topText}>
        Following | <Text style={styles.topBoldText}>For You</Text>
      </Text>
    </View>
  );
}

export default TopBar;
