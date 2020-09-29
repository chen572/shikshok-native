import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function BottomAddIcon() {
  return (
    <TouchableOpacity style={styles.bottomTabIconContainer}>
      <View style={styles.BottomAddIconContainer}>
        <FontAwesomeIcon icon={faPlus} size={20} color="#010101" />
      </View>
    </TouchableOpacity>
  );
}

export default BottomAddIcon;
