import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

/* 
  mapDispatchToProps -- used for dispatching actions to the store 
*/
// register user
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((
      err // dispatch an action object
    ) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// login, get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // save token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", JSON.stringify(token));
      // set token to Auth header
      setAuthToken(token);
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const logoutUser = () => (dispatch) => {
  // remove token from local storage
  localStorage.removeItem("jwtToken");
  // remove auth header for future request
  setAuthToken(false);
  // set current user to empty object {} which will set
  // isAuthenticated to false
  dispatch(setCurrentUser({}));
};

/* 
  action creators
*/
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
