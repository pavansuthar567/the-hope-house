import axios from "axios";
import { setStatisticsData, setLoading } from "src/store/slices/dashboardSlice";

export const getStatistics = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.get("/dashboard/statistics");
    dispatch(setStatisticsData(res?.data?.data));
    return res?.data?.data;
  } catch (e) {
    console.error(e);
    dispatch(
      setStatisticsData({
        totalVolunteers: 0,
        totalEvents: 0,
        totalDonations: 0,
        totalTestimonials: 0,
      })
    );
    return false;
  } finally {
    dispatch(setLoading(false));
  }
};
