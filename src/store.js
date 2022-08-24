import { configureStore } from '@reduxjs/toolkit';
import allRecipesReducer from './features/allRecipes/allRecipesSlice';
import singleRecipeReducer from './features/singleRecipe/singleRecipeSlice';
import userReducer from './features/user/userSlice';
import favoriteListReducer from './features/favoriteList/favoriteListSlice';
import shoppingListReducer from './features/shoppingList/shoppingListSlice';

export const store = configureStore({
  reducer: {
    allRecipes: allRecipesReducer,
    user: userReducer,
    singleRecipe: singleRecipeReducer,
    favoriteList: favoriteListReducer,
    shoppingList: shoppingListReducer,
  },
});
