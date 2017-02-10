import axios from 'axios';
import axiosDefaults from '../utils/axios_defaults';

export const getUser = (userId, success) => {
  axios.get(`users/${userId}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};
