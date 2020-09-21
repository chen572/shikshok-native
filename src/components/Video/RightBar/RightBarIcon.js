import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './styles';

function RightBarIcon({icon, size, color, amount}) {
  return (
    <TouchableOpacity style={styles.IconContainer}>
      <FontAwesomeIcon icon={icon} size={size} color={color} />
      <Text style={styles.iconText}>
        {amount > 1000 ? `${amount}K` : amount}
      </Text>
    </TouchableOpacity>
  );
}

export default RightBarIcon;
