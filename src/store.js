import { configureStore } from '@reduxjs/toolkit';
import allRecipesReducer from './features/allRecipes/allRecipesSlice';

export const store = configureStore({
  reducer: {
    allRecipes: allRecipesReducer,
  },
});
