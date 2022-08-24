import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  shoppingList: [],
  sort: 'all',
  sortOptions: [],
};

export const addToList = createAsyncThunk(
  'shoppingList/addToList',
  async (list, thunkAPI) => {
    try {
      const resp = await customFetch.post('/add_list', list);
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
  },
});

export default shoppingListSlice.reducer;
