import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = [];

const starReducer = (state = defaultState, action) => {
    let newState = merge([], state);
    switch (action.type) {
        case 'RECEIVE_STARS':
        // debugger;
            newState = action.payload.map(star => star.redditId);
            return newState;        
        case 'RECEIVE_STAR':
            newState.push(action.payload.star.redditId);
            return newState;
        case 'REMOVE_STAR':
            // debugger;
            let index = newState.indexOf(action.payload);
            newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
};

export default starReducer;