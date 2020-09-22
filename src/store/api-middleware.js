import axios from 'axios';
import store from './store';
import {appTypes} from './actions/types';

export default () => (next) => async (action) => {
  if (!action.api) {
    return next(action);
  }

  const {
    onSuccess,
    onError,
    actionName,
    method = 'POST',
    ...requestConfig
  } = action.api;

  const stateBeforeAction = store.getState();

  if (!onSuccess) {
    next(action);
  }

  try {
    const {
      data: {success, data},
    } = await axios({
      ...requestConfig,
      method,
      timeout: 300000,
      baseURL: '/api/v1',
    });

    if (!success) {
      throw Error(`got success false with api to: ${requestConfig.url}`);
    }
    if (typeof onSuccess === 'function') {
      return onSuccess(data);
    }
  } catch (e) {
    if (typeof onError === 'function') {
      return onError(e);
    }
    store.dispatch({type: appTypes.backToState, state: stateBeforeAction});
  }
};
