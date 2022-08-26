import { toast } from 'react-toastify';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import {
  clearFavoriteList,
  fetchFavorite,
} from '../favoriteList/favoriteListSlice';
import { clearStore, logoutUser } from './userSlice';
import { clearShoppingList } from '../shoppingList/shoppingListSlice';
import { clearAllRecipes } from '../allRecipes/allRecipesSlice';

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    const { sort, page } = thunkAPI.getState().favoriteList;
    thunkAPI.dispatch(fetchFavorite({ sort, page }));
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
    thunkAPI.dispatch(clearStore());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser());
    thunkAPI.dispatch(clearShoppingList());
    thunkAPI.dispatch(clearFavoriteList());
    thunkAPI.dispatch(clearAllRecipes());
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject();
  }
};
