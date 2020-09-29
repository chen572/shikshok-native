import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

function Spinner({ size }) {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
}

export { Spinner };
