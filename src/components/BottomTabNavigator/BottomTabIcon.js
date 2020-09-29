import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function BottomTabIcon({ icon, colorIcon, colorTitle, navigation, title }) {
  return (
    <TouchableOpacity
      style={styles.bottomTabIconContainer}
      onPress={() => navigation.navigate(title)}>
      <FontAwesomeIcon icon={icon} size={28} color={colorIcon} />
      <Text style={[styles.bottomTabTitle, { color: colorTitle }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default BottomTabIcon;
