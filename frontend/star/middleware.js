import * as API from './api_util';
import * as actions from './actions';
import {router, hashHistory} from 'react-router';

const starMiddleware = ({dispatch}) => next => action => {

    const success = res => {
        debugger;
        dispatch(actions.receiveStar(res.data));
    };
    switch (action.type) {
        case "CREATE_STAR":
            API.createStar(success); 
        default:
            return next(action);
    }
};

export default starMiddleware;

 


        