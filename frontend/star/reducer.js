import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = [];

const starReducer = (state = defaultState, action) => {
    let newState = merge([], state);
    switch (action.type) {
        case 'RECEIVE_STARS':
            return action.payload;        
        case 'RECEIVE_STAR':
            newState.push(action.payload.star);
            return newState;
        case 'REMOVE_STAR':
            let index = newState.indexOf(action.payload.star);
            newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
};

export default starReducer;