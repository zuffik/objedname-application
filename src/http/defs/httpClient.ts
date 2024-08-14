import axios from 'axios';

export const httpClient = axios.create({
  responseType: 'json',
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
