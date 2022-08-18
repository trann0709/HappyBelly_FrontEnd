import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  recipeDetails: null,
};

export const fetchSingleRecipe = createAsyncThunk(
  'singleRecipe/fetchSingleRecipe',
  async (id, thunkAPI) => {
    try {
      const resp = await customFetch.get(`/recipes/${id}`);
      if (resp.data.msg === 'Invalid') {
        return thunkAPI.rejectWithValue('Invalid recipe');
      }
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message.data.msg);
    }
  }
);

const singleRecipeSlice = createSlice({
  name: 'singleRecipe',
  initialState,
  extraReducers: {
    [fetchSingleRecipe.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleRecipe.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { single_recipe } = payload;
      state.recipeDetails = single_recipe;
    },
    [fetchSingleRecipe.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default singleRecipeSlice.reducer;
