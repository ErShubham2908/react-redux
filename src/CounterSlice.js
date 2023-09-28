import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const CounterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    add: (state, { payload }) => state += payload,
    reset: (state) => state = initialState
  }
});

export const { add, reset } = CounterSlice.actions;
export default CounterSlice.reducer;