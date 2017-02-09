import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './root_reducer.js';

import userMiddleware from './user/middleware';
import dashboardMiddleware from './dashboard/middleware';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger, userMiddleware, dashboardMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);
export default store;