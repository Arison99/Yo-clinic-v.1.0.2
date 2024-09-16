import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { Provider } from 'react-redux';
import { store } from './Store/Store.js';
import App from './App.jsx';

const root =
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
