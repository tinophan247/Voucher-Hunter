import axios from 'axios';

const reqInstance = axios.create({
  baseURL: 'https://voucher-hunter-api.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  withCredentials: true
});

// Response interceptor for API calls
reqInstance.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    // Handle errors
    return Promise.reject(error);
  }
);
// Request interceptor for API calls
reqInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
export default reqInstance;