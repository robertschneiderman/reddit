import axios from 'axios';

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = 'http://localhost.com';
// axios.defaults.headers.get['Content-Type'] = 'application/json';

// export const requestReddits = () => {
//     return function(dispatch) {
//         axios.get('https://www.reddit.com/hot.json').then(data => {
//             dispatch(receiveReddits(data));
//         });
//     };
// };

export const requestReddits = payload => ({
    type: 'REQUEST_REDDITS',
    payload
});

export const receiveReddits = payload => ({
    type: 'RECEIVE_REDDITS',
    payload
});