import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = {feed: null};

const dashboardReducer = (state = defaultState, action) => {
    let newState = merge({}, state);
    switch (action.type) {
        case 'CHANGE_FEED':
            newState.feed = action.payload;
            return newState;
        default:
            return state;
    }
};

export default dashboardReducer;