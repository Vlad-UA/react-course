import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Routes } from './navigation';
import { store } from './init/store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
