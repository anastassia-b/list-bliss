import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>
);

export default Root;
