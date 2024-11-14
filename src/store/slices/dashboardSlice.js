import { createSlice } from "@reduxjs/toolkit";

export const statisticsInitDetails = {
  totalVolunteers: 0,
  totalEvents: 0,
  totalDonations: 0,
  totalTestimonials: 0,
};

const initialState = {
  statistics: statisticsInitDetails,
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setStatisticsData: (state, action) => {
      state.statistics = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setStatisticsData, setLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;
