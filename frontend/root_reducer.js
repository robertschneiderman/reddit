import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth/reducer';
import dashboard from './dashboard/reducer';
import user from './user/reducer';

const appReducer = combineReducers({
  auth,
  dashboard,
  form,
  user
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGNOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;