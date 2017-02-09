import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = {};

const likeReducer = (state = defaultState, action) => {
    let newState = merge({}, state);
    switch (action.type) {
        case 'RECEIVE_LIKE':
            newState.push(action.payload);
            return newState;
        default:
            return state;
    }
};

export default likeReducer;