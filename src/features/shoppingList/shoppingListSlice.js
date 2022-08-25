import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  shoppingList: [],
};

export const addToList = createAsyncThunk(
  'shoppingList/addToList',
  async (list, thunkAPI) => {
    try {
      const resp = await customFetch.post('/add_list', list);
      // update the list
      thunkAPI.dispatch(fetchList());
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const deleteFromList = createAsyncThunk(
  'shoppingList/deleteFromList',
  async (item, thunkAPI) => {
    try {
      const resp = await customFetch.post('/delete_item', item);
      // update the list
      thunkAPI.dispatch(fetchList());
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const deleteList = createAsyncThunk(
  'shoppingList/deleteList',
  async (thunkAPI) => {
    try {
      const resp = await customFetch.delete('/delete_list');
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const fetchList = createAsyncThunk(
  'shoppingList/fetchList',
  async (thunkAPI) => {
    try {
      const resp = await customFetch.get('./fetch_list');
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  extraReducers: {
    [addToList.pending]: (state) => {
      state.isLoading = false;
    },
    [addToList.fulfilled]: (state, { payload: { msg } }) => {
      state.isLoading = false;
      toast.success(msg);
    },
    [addToList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [fetchList.pending]: (state) => {
      state.isLoading = false;
    },
    [fetchList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.shoppingList = payload;
    },
    [fetchList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteFromList.pending]: (state) => {
      state.isLoading = false;
    },
    [deleteFromList.fulfilled]: (state, { payload: { msg } }) => {
      state.isLoading = false;
      toast.success(msg);
    },
    [deleteFromList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteList.pending]: (state) => {
      state.isLoading = false;
    },
    [deleteList.fulfilled]: (state, { payload: { msg } }) => {
      state.isLoading = false;
      state.shoppingList = [];
      toast.success(msg);
    },
    [deleteList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default shoppingListSlice.reducer;
