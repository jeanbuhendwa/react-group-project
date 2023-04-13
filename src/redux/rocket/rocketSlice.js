import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: '',
  error: null,
  isRocketLoading: true,
};

export const getData = createAsyncThunk('rockets/getRocket', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

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
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
        state.isRocketLoading = false;
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserve, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
