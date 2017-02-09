import * as API from './api_util';
import * as actions from './actions';
import {router, hashHistory} from 'react-router';

const dashboardMiddleware = ({dispatch}) => next => action => {

    const success = res => {
        dispatch(actions.receiveReddits(res.data));
    };
    switch (action.type) {
        case "REQUEST_REDDITS":
            API.fetchReddits(success);
        default:
            return next(action);
    }
};

export default dashboardMiddleware;