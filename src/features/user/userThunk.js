import { toast } from 'react-toastify';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { fetchFavorite } from '../favoriteList/favoriteListSlice';
import { logoutUser } from './userSlice';

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {}
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    if (resp.status === 200) {
      thunkAPI.dispatch(fetchFavorite('a-z'));
    }
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const resetPasswordThunk = async (url, password, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, password);
    if (resp.status === 200) {
      toast.success(
        'password reset successful. Please log in again with the new password'
      );
    }
    return thunkAPI.dispatch(logoutUser());
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const logoutUserThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.post(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteUserThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.delete(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
