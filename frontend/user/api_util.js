import axios from 'axios';
// import axiosDefaults from '../utils/axios_defaults';

axios.defaults.headers.common['x-auth'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getUser = (userId, success) => {
  axios.get(`users/${userId}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};
