const appTypes = {
  backToState: 'BACK_TO_STATE',
  setLoading: 'SET_LOADING',
};

const authTypes = {
  onLoginSuccess: 'ON_LOGIN_SUCCESS',
  onLoginFail: 'ON_LOGIN_FAIL',
};

const otpTypes = {
  startValidation: 'START_VALIDATION',
  checkValidation: 'CHECK_VALIDATION',
  setValidating: 'SET_VALIDATING',
  onValidationSuccess: 'ON_VALIDATION_SUCCESS',
  onValidationError: 'ON_VALIDATION_ERROR',
  clearOTP: 'CLEAR_OTP',
};

const galleryTypes = {
  getFirstPictures: 'GET_PICTURES',
  getMorePictures: 'GET_MORE_PICTURES',
  onGetPicturesSuccess: 'ON_GET_PICTURES_SUCCESS',
  onGetPicturesError: 'ON_GET_PICTURES_ERROR',
};

export { appTypes, authTypes, otpTypes, galleryTypes };
