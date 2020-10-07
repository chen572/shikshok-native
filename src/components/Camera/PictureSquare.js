import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

function PictureSquare({ navigation, uri }) {
  const handleClick = () => {
    navigation.navigate();
  };

  return (
    <TouchableOpacity onPress={handleClick} style={styles.imageContainer}>
      <Image source={{ uri }} style={styles.image} />
    </TouchableOpacity>
  );
}

export default PictureSquare;
