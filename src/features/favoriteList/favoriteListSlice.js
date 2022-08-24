import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { toast } from 'react-toastify';

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
  async (thunkAPI, sort) => {
    try {
      const response = await customFetch.get(`/favorite?sort=${sort}`);
      return response.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'favoriteList/addFavorite',
  async (recipe, thunkAPI) => {
    try {
      const resp = await customFetch.post('/add_favorite', recipe);
      // updating the list after adding a recipe
      if (resp.status === 200) {
        thunkAPI.dispatch(fetchFavorite('a-z'));
      }
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  'favoriteList/removeFavorite',
  async (recipe_id, thunkAPI) => {
    try {
      const resp = await customFetch.delete(`/remove_favorite/${recipe_id}`);
      // update favorite list after removing a recipe
      if (resp.status === 200) {
        thunkAPI.dispatch(fetchFavorite('a-z'));
      }
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

const favoriteListSlice = createSlice({
  name: 'favoriteList',
  initialState,
  // reducers: {
  //   handleChange: (state, { payload: { name, value } }) => {
  //     state.page = 1;
  //     state[name] = value;
  //   },
  //   clearInput: (state) => {
  //     return { ...state, search: '' };
  //   },
  //   changePage: (state, { payload }) => {
  //     state.page = payload;
  //   },
  // },
  extraReducers: {
    [fetchFavorite.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchFavorite.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { favoriteList, totalRecipes, idList } = payload;
      state.favoriteList = favoriteList;
      state.totalRecipes = totalRecipes;
      state.idList = idList;
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
      toast.success(msg);
    },
    [removeFavorite.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default favoriteListSlice.reducer;
// export const { handleChange, clearInput, changePage } = allRecipesSlice.actions;
