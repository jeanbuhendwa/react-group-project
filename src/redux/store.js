import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import mission from './Missions/missionsReducer';
import rocketReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    mission,
    rockects: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
