import { otpTypes } from './types';
import { loginUser } from './app';
import store from '../store';

const clearOTP = () => ({
  type: otpTypes.clearOTP,
});

const setValidating = (isValidating, error) => ({
  type: otpTypes.setValidating,
  payload: {
    isValidating,
    error,
  },
});

const onValidationSuccess = () => ({
  type: otpTypes.onValidationSuccess,
});

const startValidation = (to, channel) => ({
  type: otpTypes.startValidation,
  api: {
    url: '/otp/start',
    method: 'POST',
    data: {
      to,
      channel,
      locale: 'en',
    },
    onStart: () => store.dispatch(loginUser()),
    onSuccess: () => store.dispatch(setValidating(true, false)),
    onError: () => store.dispatch(setValidating(false, true)),
  },
});

const checkValidation = (to, verification_code) => ({
  type: otpTypes.checkValidation,
  api: {
    url: '/otp/check',
    method: 'POST',
    data: {
      to,
      verification_code,
    },
    onStart: () => store.dispatch(loginUser(true)),
    onSuccess: () => store.dispatch(onValidationSuccess()),
  },
});

export { startValidation, checkValidation, clearOTP };
