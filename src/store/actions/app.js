import { appTypes } from './types';

const setLoading = (payload) => ({
  type: appTypes.setLoading,
  payload,
});

export { setLoading };
