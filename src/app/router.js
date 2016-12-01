import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { checkAuthorised } from './utils';
import App from './containers/app';
import Login from './containers/login_container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} onEnter={checkAuthorised} />
  </Route>
);