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
  EMPLOYEE_FETCH_RESET
} from '../constants/userConstants'

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload,
              isSignupSuccess : action.payload.role}
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      return { loading: false, 
        response: action.payload,
        id : action.payload.id,
        name : action.payload.name,
        email : action.payload.email,
        role : action.payload.role,
        islogin : true}
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}

export const fetchEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_REQUEST:
      return { loading: true }
    case EMPLOYEE_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case EMPLOYEE_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case EMPLOYEE_FETCH_RESET:
      return {}
    default:
      return state
  }
}
