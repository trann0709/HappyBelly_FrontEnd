import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrf_access_token';
axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';

const customFetch = axios.create({
  baseURL: 'http://localhost:5050',
});

// customFetch.interceptors.request.use((config) => {
//   const user = getUserFromLocalStorage();
//   if (user) {
//     config.withCredentials = true;
//     // config.headers.common['X-CSRF-TOKEN'] = ;
//   }
//   return config;
// });

// customFetch.interceptors.request.use((config) => {
//   const user = getUserFromLocalStorage();
//   if (user) {
//     config.headers.common['Authorization'] = `Bearer ${user.access_token}`;
//   }
//   return config;
// });

export default customFetch;
