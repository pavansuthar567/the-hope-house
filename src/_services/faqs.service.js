import { toast } from "react-toastify";

import {
  setFaqsLoading,
  setFaqsList,
  setCrudFaqsLoading,
  setSelectedFaqs,
  setFaqsFilteredList,
} from "src/store/slices/faqsSlice";
import { fhelper } from "src/_helpers";
import axios from "axios";
import { toastError } from ".";

export const getFaqs = () => async (dispatch) => {
  try {
    dispatch(setFaqsLoading(true));
    const res = await axios.get("faq");
    const updated = res?.data?.data?.map((x, i) => ({ srNo: i + 1, ...x }));

    const sortedData = fhelper.sortByField(updated);
    await dispatch(setFaqsList(sortedData || []));
    await dispatch(setFaqsFilteredList(sortedData || []));
    return true;
  } catch (e) {
    toastError(e);
    return false;
  } finally {
    dispatch(setFaqsLoading(false));
  }
};

export const deleteFaqs = (id) => async (dispatch) => {
  try {
    dispatch(setCrudFaqsLoading(true));
    const res = await axios.delete(`faq/${id}`);
    if (res) {
      toast.success("Faqs deleted successfully");
      return true;
    } else return false;
  } catch (e) {
    toastError(e);
    return false;
  } finally {
    dispatch(setCrudFaqsLoading(false));
  }
};

export const createFaqs = (payload) => async (dispatch) => {
  try {
    dispatch(setCrudFaqsLoading(true));
    const res = await axios.post("faq", payload);

    if (res) {
      toast.success("Faqs inserted successfully");
      return true;
    }
    return false;
  } catch (e) {
    toastError(e);
    return false;
  } finally {
    dispatch(setCrudFaqsLoading(false));
  }
};

export const updateFaqs = (obj) => async (dispatch) => {
  try {
    if (obj && obj?._id) {
      const { _id, __v, ...payload } = obj;
      if (_id) {
        dispatch(setCrudFaqsLoading(true));
        const res = await axios.put(`faq/${_id}`, payload);

        if (res) {
          toast.success("Faqs updated successfully");
          return true;
        } else {
          toast.success("Faqs Id is required");
          return false;
        }
      }
      return false;
    }
    return false;
  } catch (e) {
    toastError(e);
    return false;
  } finally {
    dispatch(setCrudFaqsLoading(false));
  }
};

export const getFaq = (id) => async (dispatch) => {
  try {
    dispatch(setFaqsLoading(true));
    const res = await axios.get(`faq/${id}`);

    if (res) {
      dispatch(setSelectedFaqs(res?.data?.data));
      return res;
    }
    return false;
  } catch (e) {
    toastError(e);
    return false;
  } finally {
    dispatch(setFaqsLoading(false));
  }
};
