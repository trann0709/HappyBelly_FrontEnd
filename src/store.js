import { configureStore } from '@reduxjs/toolkit';
import allRecipesReducer from './features/allRecipes/allRecipesSlice';
import singleRecipeReducer from './features/singleRecipe/singleRecipe';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    allRecipes: allRecipesReducer,
    user: userReducer,
    singleRecipe: singleRecipeReducer,
  },
});
