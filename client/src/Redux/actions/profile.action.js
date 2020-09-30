import axios from "axios";
import {
  CLEAR_PROFILE,
  GET_PROFILE,
  GET_ALL_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  ACCOUNT_DELETED,
} from "../actionTypes";
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

//get all profiles
export const getAllProfiles = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  try {
    const response = await axios.get("/api/profile/");
    dispatch({
      type: GET_ALL_PROFILES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        // msg: error.response.statusText,
        // status: error.response.status,
      },
    });
  }
};

//get profile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/profile/user/${userId}`);
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

//add experience
export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.put(
      "/api/profile/user/experience",
      formData,
      config
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: response.data,
    });

    history.push("/manageprofile");
  } catch (error) {
    // const errors = error.response.data.error;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        // msg: error.response.statusText,
        // status: error.response.status,
      },
    });
  }
};

//add education
export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.put(
      "/api/profile/user/education",
      formData,
      config
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: response.data,
    });

    history.push("/manageprofile");
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

//delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/profile/user/experience/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
      payload: response.data,
    });

    dispatch(setAlert("Profile deleted", "success"));
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

//delete education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/profile/user/education/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
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

//delete account and profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure ? This can NOT be undone!")) {
    try {
      await axios.delete(`/api/profile/user/`);
      dispatch({
        type: CLEAR_PROFILE,
      });
      dispatch({
        type: ACCOUNT_DELETED,
      });
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          // msg: error.response.statusText,
          // status: error.response.status,
        },
      });
    }
  }
};
