import axios from 'axios';
// import axiosDefaults from '../utils/axios_defaults';

axios.defaults.headers.common['x-auth'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/json';
const baseURL = (process.env.NODE_ENV !== "production") ? 'http://localhost:3090' : 'https://reddit-lite2.herokuapp.com';

axios.defaults.baseURL = baseURL;

export const fetchReddits = (success) => {
    axios.get(`api/reddits`)
    .then(success);
};
