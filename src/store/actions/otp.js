import {otpTypes} from './types';
import store from '../store';

const setValidating = (isValidating, error) => ({
  type: otpTypes.setValidating,
  payload: {
    isValidating,
    error,
  },
});

const startValidation = () => ({
  type: otpTypes.startValidation,
  api: {
    url: '/otp',
    params: {
      email: true,
    },
    onSuccess: () => store.dispatch(setValidating(true, false)),
    onError: () => store.dispatch(setValidating(false, true)),
  },
});

export {startValidation};
