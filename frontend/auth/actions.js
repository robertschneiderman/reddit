import axios from 'axios';
// import axiosDefaults from '../utils/axios_defaults';import { hashHistory } from 'react-router';

axios.defaults.headers.common['x-auth'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/json';
const baseURL = (process.env.NODE_ENV !== "production") ? 'http://localhost:3090' : 'https://reddit-lite2.herokuapp.com';

axios.defaults.baseURL = baseURL;

import { 
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

export function signinUser({ email, name, password }) {
  return function(dispatch) {
    axios.post(`signin`, { email, name, password })
      .then(response => {
        dispatch({ type: AUTH_USER, payload: response.user });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('currentUser', response.data.id);
        
        const currentUser = localStorage.getItem('currentUser');        
        dispatch({ type: 'REQUEST_USER', payload: currentUser });        
        hashHistory.push('dashboard');
      })
      .catch(() => {
        dispatch(authError("Bad Login Info"));
      });
  };
}

export function signupUser({ email, name, password }) {
  return function(dispatch) {
    axios.post(`signup`, { email, name, password})
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('currentUser', response.data.id);        
        dispatch({ type: AUTH_USER });
        dispatch({ type: 'CREATE_BLANK_HISTORY' });
        hashHistory.push('dashboard');
      })
      .catch(() => {
        dispatch(authError("Bad Signup Info"));
      });
      // .catch(response => dispatch(authError(response.data.error)))
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  return function(dispatch) {
    dispatch({ type: "SIGNOUT" });
    dispatch({ type: UNAUTH_USER });
  };
}