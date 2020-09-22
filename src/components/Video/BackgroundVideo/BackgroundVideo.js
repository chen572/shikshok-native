import React, {forwardRef, useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import RightBar from '../RightBar/RightBar';
import VideoDescription from '../VideoDescription/VideoDescription';

const BackgroundVideo = forwardRef(({videoUrl}, ref) => {
  const [paused, setPaused] = useState(true);

  const play = () => {
    setPaused(false);
  };

  const pause = () => {
    setPaused(true);
  };

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
        ref={ref}
        play={play}
        pause={pause}
        source={{
          uri: videoUrl,
        }}
        paused={paused}
        onTouchStart={() => setPaused(!paused)}
        style={styles.videoStyle}
        resizeMode="cover"
        repeat
      />
      <RightBar />
      <VideoDescription itemName="Nike" description="Nike" />
    </>
  );
});

export default BackgroundVideo;
