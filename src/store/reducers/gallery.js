import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import { galleryTypes } from '../actions/types';

const initialState = Immutable({
  pictures: [],
});

export default handleActions(
  {
    [galleryTypes.onGetPicturesSuccess]: (state, payload) =>
      state.setIn(['pictures'], [...state.pictures, ...payload]),
  },
  initialState,
);
