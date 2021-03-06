import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Signin from './auth/components/signin';
import Signup from './auth/components/signup';
import Signout from './auth/components/signout';
import Dashboard from './dashboard/components';
import Welcome from './welcome';
import RequireAuth from './auth/components/require_auth';
import { AUTH_USER } from './auth/types';

import store from './store'; 

window.store = store;

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

// const currentUser = localStorage.getItem('currentUser');

// if (currentUser) {
//   store.dispatch(userActions.requestUser(currentUser));
//   // store.dispatch({ type: 'REQUEST_USER', payload: currentUser });
// }

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="dashboard" component={RequireAuth(Dashboard)} />
      </Route>
    </Router>
  </Provider>
, document.querySelector('#root'));

