import * as types from "./actionTypes";
import Cookies from "js-cookie";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const userSignup = (userData, history) => dispatch => {
  axiosWithAuth()
    .post("/auth/register", userData)
    .then(res => {
      dispatch({ type: types.REGISTER });
      history.goBack();
    })
    .catch(err => console.log(err));
};

export const userLogin = (loginData, history) => dispatch => {
  axiosWithAuth()
    .post("/auth/login", loginData)
    .then(
      res =>
        dispatch({
          type: types.LOGIN,
          payload: Cookies.get("username")
        }) & history.goBack()
    )
    .catch(err => console.log(err));
};

export const userLogout = () => {
  localStorage.removeItem("token");
  return { type: types.LOGOUT };
};

export const displayUserList = () => dispatch => {
  dispatch({ type: types.GET_USERS });
  axiosWithAuth()
    .get("/users")
    .then(res => {
      dispatch({
        type: types.GET_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: types.GET_USERS_FAILED, payload: err.res });
    });
};
