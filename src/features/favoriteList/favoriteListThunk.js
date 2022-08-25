import { createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
import { checkForUnauthorizedResponse } from '../../utils/axios';
import { fetchFavorite } from './favoriteListSlice';

export const fetchFavoriteThunk = async ({ sort, page }, thunkAPI) => {
  try {
    const response = await customFetch.get(
      `/favorite?sort=${sort}&page=${page}`
    );
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const addFavoriteThunk = async (url, recipe, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, recipe);
    const { sort, page } = thunkAPI.getState().favoriteList;
    thunkAPI.dispatch(fetchFavorite({ sort, page }));
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const removeFavoriteThunk = async (recipe_id, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`/remove_favorite/${recipe_id}`);
    const { sort, page } = thunkAPI.getState().favoriteList;
    thunkAPI.dispatch(fetchFavorite({ sort, page }));
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
