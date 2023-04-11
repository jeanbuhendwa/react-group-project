import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};
const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
    cancelReserve: (state, action) => {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
  },
});

export const { reserve, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
