import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3002',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization =
    'Bearer ' + window.localStorage.getItem('token');
  return config;
});

export default instance;
