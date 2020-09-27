import Immutable from 'seamless-immutable';
import {handleActions} from 'redux-actions';
import {otpTypes} from '../actions/types';

const initialState = Immutable({
  isValidating: false,
  error: false,
});

export default handleActions(
  {
    [otpTypes.setValidation]: (state, {payload: {isValidating, error}}) =>
      state.setIn(['isValidating'], isValidating).setIn(['error'], error),
  },
  initialState,
);
