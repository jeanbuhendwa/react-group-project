import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    rockects: rocketReducer,
  },
});

export default store;
