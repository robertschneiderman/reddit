import axios from 'axios';
// import axiosDefaults from '../utils/axios_defaults';

axios.defaults.headers.post['Content-Type'] = 'application/json';
const baseURL = (process.env.NODE_ENV !== "production") ? 'http://localhost:3090' : 'https://reddit-lite2.herokuapp.com';

axios.defaults.baseURL = baseURL;

export const fetchStars = (success) => {
    axios.defaults.headers.common['x-auth'] = localStorage.getItem('token');
    axios.get(`api/stars`)
    .then(success);
};

export const createStar = (redditId, success) => {
    axios.defaults.headers.common['x-auth'] = localStorage.getItem('token');
    axios.post(`api/stars`, {redditId})
    .then(success);
};

export const deleteStar = (starId, success) => {
    axios.defaults.headers.common['x-auth'] = localStorage.getItem('token');
    axios.delete(`api/stars/${starId}`)
    .then(success);
};