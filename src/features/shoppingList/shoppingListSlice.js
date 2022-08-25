import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { toast } from 'react-toastify';
import {
  addToListThunk,
  deleteFromListThunk,
  deleteListThunk,
  fetchListThunk,
} from './shoppingListThunk';

const initialState = {
  isLoading: false,
  shoppingList: [],
  names: [],
};

export const addToList = createAsyncThunk(
  'shoppingList/addToList',
  (list, thunkAPI) => {
    return addToListThunk('/add_list', list, thunkAPI);
  }
);

export const deleteFromList = createAsyncThunk(
  'shoppingList/deleteFromList',
  (item, thunkAPI) => {
    return deleteFromListThunk(item, thunkAPI);
  }
);

export const deleteList = createAsyncThunk(
  'shoppingList/deleteList',
  (thunkAPI) => {
    return deleteListThunk('/delete_list', thunkAPI);
  }
);

export const fetchList = createAsyncThunk(
  'shoppingList/fetchList',
  async (thunkAPI) => {
    return fetchListThunk('./fetch_list', thunkAPI);
  }
);

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    clearShoppingList: (state) => {
      return initialState;
    },
  },
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
      const { shoppingList, names } = payload;
      state.isLoading = false;
      state.shoppingList = shoppingList;
      state.names = names;
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
      state.names = [];
      toast.success(msg);
    },
    [deleteList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default shoppingListSlice.reducer;
export const { clearShoppingList } = shoppingListSlice.actions;
