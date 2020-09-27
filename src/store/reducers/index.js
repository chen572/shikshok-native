import {combineReducers} from 'redux';
import app from './app';
import otp from './otp';
import {appTypes} from '../actions/types';

const reducers = combineReducers({
  app,
  otp,
});

export default (state, action) => {
  if (action.type === appTypes.backToState) {
    return action.state;
  }
  return reducers(state, action);
};
