import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  user: null,
  registered: false,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    console.log(`Register ${user}`);
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`Login ${user}`);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
});

export default userSlice.reducer;
