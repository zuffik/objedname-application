import axios from 'axios';

export const httpClient = axios.create({
  responseType: 'json',
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});
