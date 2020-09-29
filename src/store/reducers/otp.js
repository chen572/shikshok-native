import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import { otpTypes } from '../actions/types';

const initialState = Immutable({
  isValidating: false,
  success: false,
  error: false,
});

export default handleActions(
  {
    [otpTypes.setValidating]: (state, { payload: { isValidating, error } }) =>
      state.setIn(['isValidating'], isValidating).setIn(['error'], error),
    [otpTypes.onValidationSuccess]: (state) =>
      state.setIn(['success'], true).setIn(['isValidating'], false),
    [otpTypes.clearOTP]: (state) =>
      state.setIn(['error'], false).setIn(['isValidating'], false),
    [otpTypes.onValidationError]: (state) =>
      state.setIn(['isValidating'], false).setIn(['error'], true),
  },
  initialState,
);
