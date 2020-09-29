import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faPlus,
  faHeart,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import RightBarIcon from './RightBarIcon';

function RightBar() {
  return (
    <View style={styles.rightBarContainer}>
      <TouchableOpacity style={styles.userImgContainer}>
        <Image
          style={styles.userImg}
          resizeMode="contain"
          source={{
            uri:
              'https://i.pinimg.com/originals/7b/8f/49/7b8f492529fd236dc59baf184faf8488.jpg',
          }}
        />
      </TouchableOpacity>
      <View style={styles.userImgPlusIcon}>
        <FontAwesomeIcon icon={faPlus} size={12} color="#FFF" />
      </View>
      <RightBarIcon icon={faHeart} size={28} color="#FFF" amount={0} />
      <RightBarIcon icon={faCommentDots} size={28} color="#FFF" amount={0} />
    </View>
  );
}

export default RightBar;
