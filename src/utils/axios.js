import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';

const customFetch = axios.create({
  baseURL: 'http://localhost:5050',
});

// customFetch.interceptors.request.use((config) => {
//   const user = getUserFromLocalStorage();
//   if (user) {
//     config.headers.common['Authorization'] = `Bearer ${user.token}`;
//   }
//   return config;
// });

export default customFetch;
