const appTypes = {
  backToState: 'BACK_TO_STATE',
  loginUser: 'LOGIN_USER',
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

export { appTypes, authTypes, otpTypes };
