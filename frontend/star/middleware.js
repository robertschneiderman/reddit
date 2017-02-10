import * as API from './api_util';
import * as actions from './actions';
import {router, hashHistory} from 'react-router';

const starMiddleware = ({dispatch}) => next => action => {

    const success = res => {
        dispatch(actions.receiveStars(res.data));
    };

    const successCreate = res => {
        dispatch(actions.receiveStar(res.data));
    };

    const successDelete = res => {
        dispatch(actions.removeStar(res.data.redditId));
    };    
    
    switch (action.type) {
        case "REQUEST_STARS":
            API.fetchStars(success); 
            return next(action);                    
        case "CREATE_STAR":
            API.createStar(action.payload, successCreate); 
            return next(action);            
        case "DELETE_STAR":
            API.deleteStar(action.payload, successDelete);
            return next(action);               
        default:
            return next(action);
    }
};

export default starMiddleware;

 


        


// WEBPACK FOOTER //
// frontend/star/middleware.js