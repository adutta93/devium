import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actionTypes";

//register user

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const response = await axios.post("/api/users/signup", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
