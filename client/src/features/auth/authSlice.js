import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser, checkUser, updateUser,signOut,checkUserById } from './authAPI';

const initialState = {
  loggedInUser: null,
  status: 'idle',
  error: null,
};

export const createUserAsync = createAsyncThunk(
  'auth/createUser',
  async (userData) => {
    console.log("hello")
    const response = await createUser(userData);
    
    console.log({response,userData})
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  'auth/updateUser',

  async (update) => {
    const response = await updateUser(update);
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  'auth/checkUser',
  async (LogInInfo,{rejectWithValue}) => {
    try {
      const response = await checkUser(LogInInfo);
      console.log(response.data)
    return response.data;
    } catch (error) {
      console.log(error)
     return rejectWithValue(error)
    }
    
  }
);

export const checkUserByIdAsync = createAsyncThunk(
  'auth/checkUserById',
  async (id,{rejectWithValue}) => {
    try {
      const response = await checkUserById(id);
      console.log(response.data)
    return response.data;
    } catch (error) {
      console.log(error)
     return rejectWithValue(error)
    }
    
  }
);


export const signOutAsync = createAsyncThunk(
  'auth/signOut',
  async (userId) => {
    const response = await signOut(userId);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = null;
      })
      .addCase(checkUserByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;;
      })
      .addCase(checkUserByIdAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
