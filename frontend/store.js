import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './root_reducer.js';

import userMiddleware from './user/middleware';
import redditMiddleware from './reddit/middleware';
import starMiddleware from './star/middleware';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger, userMiddleware, redditMiddleware, starMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);
export default store;