import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  EMPLOYEE_FETCH_REQUEST,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_FETCH_FAIL,
  EMPLOYEE_FETCH_RESET,
} from "../constants/userConstants";
import axios from "axios";

export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem("token");
    dispatch({ type: USER_SIGNOUT });
    document.location.href = "/signin";
  };
};

export const signup = (
  firstName,
  lastName,
  email,
  password,
  address,
  pinCode,
  phone
) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      firstName,
      lastName,
      email,
      password,
      address,
      pinCode,
      phone,
    };
    const url = "http://localhost:8080/user/signup";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        });
      });
  };
};

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      email,
      password,
    };
    const url = "http://localhost:8080/user/signin";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        });
      });
  };
};

export const signupSupplier = (
  firstName,
  lastName,
  email,
  password,
  address,
  pinCode,
  phone,
  role
) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      firstName,
      lastName,
      email,
      password,
      address,
      pinCode,
      phone,
      role,
    };
    const url = "http://localhost:8080/admin/add-user";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        });
      });
  };
};

export const getEmployees = () => {
  return (dispatch) => {
    dispatch({
      type: EMPLOYEE_FETCH_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        // token: sessionStorage['token'],
      },
    };

    const url = "http://localhost:8080/admin/customer-list";
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: EMPLOYEE_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: EMPLOYEE_FETCH_FAIL,
          payload: error,
        });
      });
  };
};
