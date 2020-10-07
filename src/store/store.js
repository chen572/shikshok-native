import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import { api, native } from './middleware';

let middleware = applyMiddleware(api, native);

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(middleware);
}

const store = createStore(reducers, middleware);

export default store;
