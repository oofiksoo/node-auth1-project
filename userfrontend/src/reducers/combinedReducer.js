import * as types from "../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  username: user ? user.username : "",
  email: user ? user.email : "",
  password: "",
  users: [],
  logintransaction: false,
  cookie: []
};

export const combinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      return { ...state, token: action.payload, user: action.payload };
    case types.LOGIN:
      return {
        ...state,
        error: "",
        token: [action.payload],
        logintransaction: false,
        user: [action.payload]
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        logintransaction: true,
        error: "",
        token: [...action.payload],
        user: [...action.payload]
      };

    case types.LOGIN_FAILED:
      return {
        ...state,

        logintransaction: false,

        error: action.payload
      };
    case types.GET_USERS:
      return {
        ...state,
        usertransaction: false,
        users: [],
        error: ""
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,

        usertransaction: true,

        error: "",

        users: [...state.users, ...action.payload]
      };

    case types.GET_USERS_FAILED:
      return {
        ...state,

        usertransaction: false,

        error: action.payload
      };
    default:
      return state;
  }
};

export default [combinedReducer, initialState];
