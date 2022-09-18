import axios from 'axios';
import { clearStore } from '../features/user/userSlice';
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrf_access_token';
axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';

const customFetch = axios.create({
  baseURL: 'http://localhost:5050',
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    const err =
      error.response.data.msg || 'Unauthorized! Please log in to continue';
    return thunkAPI.rejectWithValue(err);
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
