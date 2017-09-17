import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchUser, signup, login, logout } from './actions/auth_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchUser = fetchUser;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
