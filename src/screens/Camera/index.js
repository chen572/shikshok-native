import React, { useRef, useState } from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Avatar, IconButton } from 'react-native-paper';

import useFlash from '../../hooks/useFlash';
import useCameraDirection from '../../hooks/useCameraDirection';
import useCameraActions from '../../hooks/useCameraActions';

import styles from './style';

function Camera() {
  const camera = useRef();
  const [video, setVideo] = useState(false);

  const {
    flash: { flashIcon, flashValue },
    setFlashValue,
  } = useFlash();
  const {
    camera: { cameraIcon, cameraValue },
    setCameraValue,
  } = useCameraDirection();

  const { takePicture, startVideo, endVideo, lastImgUri } = useCameraActions(
    camera.current,
  );

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type[cameraValue]}
        flashMode={RNCamera.Constants.FlashMode[flashValue]}
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
        <View style={styles.galleryButtonContainer}>
          {!!lastImgUri && (
            <Image
              source={{ uri: lastImgUri, width: 60, height: 60 }}
              style={styles.galleryAvatarImage}
            />
          )}
        </View>
        <View style={styles.captureContainer}>
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
            delayLongPress={250}
            style={styles.capture}>
            <Avatar.Text
              size={60}
              style={video ? styles.video : styles.picture}
            />
          </Pressable>
          <Text style={styles.captureTextStyle}>
            Hold for video, tap for photo
          </Text>
        </View>
        <View style={styles.rightToolbarContainer}>
          <IconButton
            color="#fff"
            size={28}
            icon={cameraIcon}
            style={styles.cameraChangeIconStyle}
            onPress={setCameraValue}
            animated
          />
          <IconButton
            color="#fff"
            size={28}
            icon={flashIcon}
            style={styles.flashIconStyle}
            onPress={setFlashValue}
            animated
          />
        </View>
      </View>
    </View>
  );
}

export default Camera;
