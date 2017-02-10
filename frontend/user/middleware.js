import * as API from './api_util';
import * as actions from './actions';
import {router, hashHistory} from 'react-router';

const userMiddleware = ({dispatch}) => next => action => {

    const success = res => {
        dispatch(actions.receiveUser(res.data));
    };
    switch (action.type) {
        case 'REQUEST_USER':
            API.getUser(action.payload.id, success);
            return next(action);
        default:
            return next(action);
    }
};

export default userMiddleware;