import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';
import {
  deleteUserThunk,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
  resetPasswordThunk,
  updateUserThunk,
} from './userThunk';

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  registered: false,
  isSidebarOpen: false,
  // should these two be part of user
  // favoriteList: [],
  // shoppingList: [],
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  (user, thunkAPI) => {
    return registerUserThunk('/register', user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  (user, thunkAPI) => {
    return loginUserThunk('/login', user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  (user, thunkAPI) => {
    return updateUserThunk('/update_user', user, thunkAPI);
  }
);

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  (password, thunkAPI) => {
    return resetPasswordThunk('/reset_password', password, thunkAPI);
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', (thunkAPI) => {
  return logoutUserThunk('/logout', thunkAPI);
});

export const deleteUser = createAsyncThunk('user/deleteUser', (thunkAPI) => {
  return deleteUserThunk('/delete_user', thunkAPI);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.registered = true;
      toast.success(
        <div>
          Registration Success!
          <br />
          Please log in to continue
        </div>
      );
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { user } = payload;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello there, ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { user } = payload;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success('User Updated!');
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [resetPassword.pending]: (state) => {
      state.isLoading = true;
    },
    [resetPassword.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [resetPassword.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [logoutUser.pending]: (state) => {
      state.isLoading = true;
    },
    [logoutUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      toast.success(payload);
      // remove everything
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
export const { toggleSidebar } = userSlice.actions;
