import axios from 'axios';
// import axiosDefaults from '../utils/axios_defaults';

axios.defaults.headers.common['x-auth'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchReddits = (success) => {
    axios.get(`api/reddits`)
    .then(success);
};
