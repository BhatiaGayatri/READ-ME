import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    authenticateUser: (state) => {
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { authenticateUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
