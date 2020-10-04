import { useState, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

export default (camera) => {
  const [lastImgUri, setLastImgUri] = useState('');

  useEffect(() => {
    getLastImg().then((uri) => {
      setLastImgUri(uri);
    });
  }, []);

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      CameraRoll.save(data.uri, {
        type: 'photo',
        album: 'wow',
      }).then((savedUri) => setLastImgUri(savedUri));
    }
  };

  const startVideo = async () => {
    if (camera) {
      const options = {
        quality: RNCamera.Constants.VideoQuality['720p'],
        maxDuration: 5,
      };
      camera.recordAsync(options).then(({ uri }) =>
        CameraRoll.save(uri, {
          type: 'video',
          album: 'wow',
        }).then((savedUri) => setLastImgUri(savedUri)),
      );
    }
  };

  const endVideo = () => {
    if (camera) {
      //   camera.stopRecording();
    }
  };

  const getLastImg = async () => {
    return CameraRoll.getPhotos({ groupName: 'wow', first: 1 }).then(
      (photos) => photos.edges[0].node.image.uri,
    );
  };

  return {
    takePicture,
    startVideo,
    endVideo,
    lastImgUri,
  };
};
