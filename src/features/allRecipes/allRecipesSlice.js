import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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
  async (search, thunkAPI) => {
    try {
      const response = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      thunkAPI.dispatch(clearInput());
      return response.data.meals;
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
      state[name] = value;
    },
    clearInput: (state) => {
      return { ...state, search: '' };
    },
  },
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload !== null) {
        state.allFetchedRecipes = payload;
        state.totalRecipes = payload.length;
      } else {
        state.allFetchedRecipes = [];
        state.totalRecipes = 0;
      }
    },
    [fetchRecipes.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default allRecipesSlice.reducer;
export const { handleChange, clearInput } = allRecipesSlice.actions;
