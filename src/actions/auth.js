import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  USER_INFO,
  USER_FAIL,
} from './types';

import AuthService from '../services/AuthService';

export const register = (first_name, last_name, email, password, confirm_password, mobile_number, dob) => (dispatch) => AuthService.register(first_name, last_name, email, password, confirm_password, mobile_number, dob).then(
  (response) => {
    dispatch({
      type: REGISTER_SUCCESS,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    });

    return Promise.resolve();
  },
  (error) => {
    const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();

    dispatch({
      type: REGISTER_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const login = (username, password) => (dispatch) => AuthService.login(username, password).then(
  (data) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: data },
    });

    return Promise.resolve();
  },
  (error) => {
    const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();

    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const user = () => (dispatch) => AuthService.user().then(
  (data) => {
    dispatch({
      type: USER_INFO,
      payload: { user: data },
    });

    return Promise.resolve();
  },
  (error) => {
    const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();

    dispatch({
      type: USER_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

