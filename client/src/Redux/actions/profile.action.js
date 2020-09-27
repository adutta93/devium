import axios from "axios";
import { set } from "mongoose";
import { GET_PROFILE, PROFILE_ERROR } from "../actionTypes";
import { setAlert } from "./alert.action";
//get current profile
export const getUserProfile = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//create or update profile

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "/api/profile/manage-profile",
      formData,
      config
    );
    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    });

    if (!edit) {
      history.push("/manageprofile");
    }
  } catch (error) {
    const errors = error.response.data.error;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
