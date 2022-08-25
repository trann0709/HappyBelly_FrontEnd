import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addFavoriteThunk,
  fetchFavoriteThunk,
  removeFavoriteThunk,
} from './favoriteListThunk';

const initialState = {
  isLoading: false,
  favoriteList: [],
  idList: [],
  totalRecipes: 0,
  numOfPages: 1,
  page: 1,
  sort: 'a-z',
  sortOptions: ['a-z', 'z-a'],
};

export const fetchFavorite = createAsyncThunk(
  'favoriteList/fetchFavorite',
  ({ sort, page }, thunkAPI) => {
    return fetchFavoriteThunk({ sort, page }, thunkAPI);
  }
);

export const addFavorite = createAsyncThunk(
  'favoriteList/addFavorite',
  (recipe, thunkAPI) => {
    return addFavoriteThunk('/add_favorite', recipe, thunkAPI);
  }
);

export const removeFavorite = createAsyncThunk(
  'favoriteList/removeFavorite',
  (recipe_id, thunkAPI) => {
    return removeFavoriteThunk(recipe_id, thunkAPI);
  }
);

const favoriteListSlice = createSlice({
  name: 'favoriteList',
  initialState,
  reducers: {
    handleSort: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearFavoriteList: (state) => {
      return initialState;
    },
  },
  extraReducers: {
    [fetchFavorite.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchFavorite.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { favoriteList, totalRecipes, idList, numOfPages } = payload;
      state.favoriteList = favoriteList;
      state.totalRecipes = totalRecipes;
      state.idList = idList;
      state.numOfPages = numOfPages;
    },
    [fetchFavorite.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [addFavorite.pending]: (state) => {
      state.isLoading = true;
    },
    [addFavorite.fulfilled]: (state, { payload: { msg } }) => {
      state.isLoading = false;
      toast.success(msg);
    },
    [addFavorite.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [removeFavorite.pending]: (state) => {
      state.isLoading = true;
    },
    [removeFavorite.fulfilled]: (state, { payload: { msg } }) => {
      state.isLoading = false;
      state.page = 1;
      toast.success(msg);
    },
    [removeFavorite.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default favoriteListSlice.reducer;
export const { changePage, handleSort, clearFavoriteList } =
  favoriteListSlice.actions;
