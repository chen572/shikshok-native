import { galleryTypes } from './types';
import { setLoading } from './app';
import CameraRoll from '@react-native-community/cameraroll';
import store from '../store';

const onGetPicturesSuccess = (payload) => {
  payload = Array.isArray(payload)
    ? payload.map((picture) => picture.image.uri)
    : [];
  return { type: galleryTypes.onGetPicturesSuccess, payload };
};

const onGetPicturesError = () => ({
  type: galleryTypes.onGetPicturesError,
});

const getFirstPictures = () => ({
  type: galleryTypes.getFirstPictures,
  native: {
    nativeFunction: () => CameraRoll.getPhotos({ first: 5 }),
    onStart: () => store.dispatch(setLoading(true)),
    onSuccess: ({ edges }) => store.dispatch(onGetPicturesSuccess(edges)),
    onError: () => store.dispatch(onGetPicturesError()),
  },
});

const getMorePictures = (after) => ({
  type: galleryTypes.getMorePictures,
  native: {
    nativeFunction: () => CameraRoll.getPhotos({ first: 5, after }),
    onSuccess: ({ edges }) => store.dispatch(onGetPicturesSuccess(edges)),
    onError: () => store.dispatch(onGetPicturesError()),
  },
});

export { getFirstPictures, getMorePictures };
