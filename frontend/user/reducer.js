import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = {};

const userReducer = (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case 'RECEIVE_USER':
            return newState;
        default:
            return state;
    }
};

export default userReducer;