import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://192.168.1.8:5050',
});

export default customFetch;
