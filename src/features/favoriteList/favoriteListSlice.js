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
  favoriteList: [],
  totalRecipes: 0,
  numOfPages: 1,
  page: 1,
  ...initialFitlersState,
};

// export const fetchRecipes = createAsyncThunk(
//   'allRecipes/fetchRecipes',
//   async ({ search, page }, thunkAPI) => {
//     try {
//       const response = await customFetch.get(
//         `/recipes?search=${search}&page=${page}`
//       );
//       return response.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message.data.msg);
//     }
//   }
// );

export const addFavorite = createAsyncThunk(
  'favoriteList/addFavorite',
  async (recipe, thunkAPI) => {
    try {
      const resp = await customFetch.post('/add_favorite', recipe);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  'favoriteList/removeFavorite',
  async (recipe, thunkAPI) => {
    try {
      const resp = await customFetch.delete('/remove_favorite', recipe);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
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
    // [fetchRecipes.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [fetchRecipes.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   const { numOfPages, allFetchedRecipes, totalRecipes } = payload;
    //   state.allFetchedRecipes = allFetchedRecipes;
    //   state.totalRecipes = totalRecipes;
    //   state.numOfPages = numOfPages;
    // },
    // [fetchRecipes.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   toast.error(payload);
    // },
    [addFavorite.pending]: (state) => {
      state.isLoading = true;
    },
    [addFavorite.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload);
    },
    [addFavorite.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [removeFavorite.pending]: (state) => {
      state.isLoading = true;
    },
    [removeFavorite.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload);
    },
    [removeFavorite.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default favoriteListSlice.reducer;
// export const { handleChange, clearInput, changePage } = allRecipesSlice.actions;
