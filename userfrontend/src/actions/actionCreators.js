import * as types from "./actionTypes";
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
          payload: res.data.token
        }) &
        console.log(res) &
        localStorage.setItem("Authorization", res.data.token)
    )
    .catch(err => console.log(err));
};

export const userLogout = () => {
  localStorage.removeItem("token");
  axiosWithAuth().get("/auth/logout");
  return { type: types.LOGOUT };
};

export const displayUserList = () => dispatch => {
  dispatch({ type: types.GET_USERS });
  axiosWithAuth()
    .get("/users")
    .then(
      res =>
        dispatch({
          type: types.GET_USERS_SUCCESS,
          payload: res.data
        }) & console.log(res.data)
    )
    .catch(err => {
      dispatch({ type: types.GET_USERS_FAILED, payload: err.res });
    });
};
