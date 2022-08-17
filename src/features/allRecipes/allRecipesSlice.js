import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
import { toast } from 'react-toastify';

const initialFitlersState = {
  search: '',
  sort: 'a-z',
  sortOptions: ['a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  allFetchedRecipes: [],
  totalRecipes: 0,
  numOfPages: 1,
  page: 1,
  ...initialFitlersState,
};

export const fetchRecipes = createAsyncThunk(
  'allRecipes/fetchRecipes',
  async ({ search, page }, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `/recipes?search=${search}&page=${page}`
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message.data.msg);
    }
  }
);

const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearInput: (state) => {
      return { ...state, search: '' };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { numOfPages, allFetchedRecipes, totalRecipes } = payload;
      state.allFetchedRecipes = allFetchedRecipes;
      state.totalRecipes = totalRecipes;
      state.numOfPages = numOfPages;
    },
    [fetchRecipes.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default allRecipesSlice.reducer;
export const { handleChange, clearInput, changePage } = allRecipesSlice.actions;
