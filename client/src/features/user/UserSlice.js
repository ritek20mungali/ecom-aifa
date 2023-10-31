import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInOrders } from './UserAPI';

const initialState = {
  userOrders: [],
  status: 'idle',
};


export const fetchLoggedInOrdersAsync = createAsyncThunk(
  'user/fetchLoggedInOrders',
  async (id) => {
    const response = await fetchLoggedInOrders(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userOrders= action.payload;
      });
  },
});



// export const selectCount = (state) => state.counter.value;

export const selectUserOrders=(state)=>state.user.userOrders 


export default counterSlice.reducer;
