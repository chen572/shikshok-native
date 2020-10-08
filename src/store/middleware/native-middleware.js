import store from '../store';
import { appTypes } from '../actions/types';

export default () => (next) => async (action) => {
  if (!action.native) {
    return next(action);
  }

  const { nativeFunction, onStart, onSuccess, onError } = action.native;

  const stateBeforeAction = store.getState();

  if (!nativeFunction || !onSuccess) {
    next(action);
  }

  if (onStart) {
    onStart();
  }

  try {
    const data = await nativeFunction();

    if (typeof onSuccess === 'function') {
      return onSuccess(data);
    }
  } catch (e) {
    if (typeof onError === 'function') {
      return onError(e);
    }
    store.dispatch({ type: appTypes.backToState, state: stateBeforeAction });
  }
};
