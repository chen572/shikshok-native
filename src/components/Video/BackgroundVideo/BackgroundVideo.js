import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import RightBar from '../RightBar/RightBar';
import VideoDescription from '../VideoDescription/VideoDescription';

function BackgroundVideo({videoUrl}) {
  const [paused, setPaused] = useState(false);

  return (
    <>
      {paused && (
        <TouchableWithoutFeedback onPress={() => setPaused(!paused)}>
          <FontAwesomeIcon
            style={styles.iconStyle}
            icon={faPlay}
            size={100}
            color="#E5E5E5"
          />
        </TouchableWithoutFeedback>
      )}
      <Video
        source={{
          uri: videoUrl,
        }}
        paused={paused}
        onTouchEnd={() => setPaused(!paused)}
        style={styles.videoStyle}
        resizeMode="cover"
        repeat
      />
      <RightBar />
      <VideoDescription itemName="Nike" description="Nike" />
    </>
  );
}

export default BackgroundVideo;
