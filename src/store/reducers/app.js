import Immutable from 'seamless-immutable';
import {handleActions} from 'redux-actions';
import {appTypes} from '../actions/types';

const initialState = Immutable({
  user: null,
  loading: false,
  error: '',
});

export default handleActions(
  {
    [appTypes.loginUser]: (state) => state.setIn(['loading'], true),
  },
  initialState,
);
