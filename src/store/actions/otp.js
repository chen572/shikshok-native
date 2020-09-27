import {otpTypes} from './types';
import store from '../store';

const setValidating = (isValidating, err) => ({
  type: otpTypes.setValidating,
  payload: {
    isValidating,
    err,
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
