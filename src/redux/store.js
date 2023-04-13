import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';
import missionsReducer from './missions/missionsReducer';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionsReducer,
  },
});

export default store;
