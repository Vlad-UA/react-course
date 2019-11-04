import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
