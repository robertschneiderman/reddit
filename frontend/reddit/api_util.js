import axios from 'axios';
import axiosDefaults from '../utils/axios_defaults';

export const fetchReddits = (success) => {
    axios.get(`api/reddits`)
    .then(success);
};
