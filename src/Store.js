import { configureStore } from '@reduxjs/toolkit';
import countReducer from './CounterSlice';

const store = configureStore({
  reducer: {
    count: countReducer
  }
});

// export default store;