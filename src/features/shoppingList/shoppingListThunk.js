import { fetchList } from './shoppingListSlice';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';

export const addToListThunk = async (url, list, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, list);
    // update the list
    thunkAPI.dispatch(fetchList());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteFromListThunk = async (item, thunkAPI) => {
  try {
    const { id, ingredient } = item;
    const resp = await customFetch.delete(
      `/delete_item?id=${id}&ingredient=${ingredient}`
    );
    // update the list
    thunkAPI.dispatch(fetchList());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteListThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.delete(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const fetchListThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
