import axios from 'axios';

import { BASE_URL } from '../constants';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  },
});

export { api };
