import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
};

export const counterSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    page01: (state) => {
      state.page = 1;
    },
    page02: (state) => {
      state.page = 2;
    },
    page03: (state) => {
      state.page = 3;
    },
    page04: (state) => {
      state.page = 4;
    }
  },
});

export const { page01, page02, page03, page04 } = counterSlice.actions;

export default counterSlice.reducer;