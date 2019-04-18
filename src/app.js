import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import store from './store/store';
import 'normalize.css/normalize.css';
import './scss/style.scss';

console.log('app.js is running');

const store = store();
console.log(store.getState());

const appRoot = document.querySelector('#app');

ReactDOM.render(<AppRouter />, appRoot);
