import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
