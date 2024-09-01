import axios from 'axios';

import { REST_BASE_URL } from '../../constants/apiConstants';

export const api = axios.create({
  baseURL: REST_BASE_URL,
});
