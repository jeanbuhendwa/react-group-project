import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  missions: [],
  status: '',
  error: null,
  isMissionLoading: true,
};
export const fetchMissions = createAsyncThunk(
  'missions/getMission',
  async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);
const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newMission = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, joined: true };
      });
      return {
        ...state,
        missions: newMission,
      };
    },
    leaveMission: (state, action) => {
      const newMission = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, joined: false };
      });
      return {
        ...state,
        missions: newMission,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        missions: action.payload,
        isMissionLoading: false,
      }))
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});
export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
