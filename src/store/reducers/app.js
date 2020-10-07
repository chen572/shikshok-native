import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import { appTypes, otpTypes, galleryTypes } from '../actions/types';

const initialState = Immutable({
  user: null,
  loading: false,
  error: '',
});

export default handleActions(
  {
    [appTypes.setLoading]: (state, payload) =>
      state.setIn(['loading'], payload),
    [otpTypes.setValidating]: (state) => state.setIn(['loading'], false),
    [galleryTypes.onGetPicturesSuccess]: (state) =>
      state.setIn(['loading'], false),
    [galleryTypes.onGetPicturesError]: (state) =>
      state.setIn(['loading'], false),
  },
  initialState,
);
