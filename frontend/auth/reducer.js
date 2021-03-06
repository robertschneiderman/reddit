import merge from 'lodash/merge';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      console.log("action:", action);
      return merge({}, state, {authenticated: true } );
    case UNAUTH_USER:
      return { state, authenticated: false };
    case AUTH_ERROR:
      return { state, error: action.payload };
  }

  return state;
}