import axios from 'axios';
import axiosDefaults from '../utils/axios_defaults';

export const fetchStars = (success) => {
    axios.get(`api/stars`)
    .then(success);
};

export const createStar = (redditId, success) => {
    axios.post(`api/stars`, {redditId})
    .then(success);
};

export const deleteStar = (starId, success) => {
    axios.delete(`api/stars/${starId}`)
    .then(success);
};