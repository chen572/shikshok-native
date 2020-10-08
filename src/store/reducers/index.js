import { combineReducers } from 'redux';
import app from './app';
import otp from './otp';
import gallery from './gallery';
import { appTypes } from '../actions/types';

const reducers = combineReducers({
  app,
  otp,
  gallery,
});

export default (state, action) => {
  if (action.type === appTypes.backToState) {
    return action.state;
  }
  return reducers(state, action);
};
