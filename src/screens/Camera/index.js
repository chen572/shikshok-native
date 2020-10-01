import React, { useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Avatar, Button } from 'react-native-paper';
import styles from './style';

function Camera() {
  const camera = useRef();
  const [video, setVideo] = useState(false);

  const takePicture = async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true, doNotSave: true };
      const data = await camera.current.takePictureAsync(options);
    }
  };

  const startVideo = async () => {
    if (camera.current) {
      const options = {
        quality: RNCamera.Constants.VideoQuality['720p'],
        maxDuration: 5,
      };
      camera.current
        .recordAsync(options)
        .then((videoObj) => console.log(videoObj.uri));
    }
  };

  const endVideo = () => {
    if (camera.current) {
      camera.current.stopRecording();
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={styles.toolbarContainer}>
        <Pressable
          onLongPress={() => {
            setVideo(true);
            startVideo();
          }}
          onPressOut={() => {
            setVideo(false);
            endVideo();
          }}
          onPress={takePicture}
          style={styles.capture}>
          <Avatar.Text
            size={60}
            style={video ? styles.video : styles.picture}
          />
        </Pressable>
        <Button icon="flash"> </Button>
      </View>
    </View>
  );
}

export default Camera;
