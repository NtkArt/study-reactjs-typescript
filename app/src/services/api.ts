import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/' || process.env.REACT_APP_BASE_URL,
});

export default api;
