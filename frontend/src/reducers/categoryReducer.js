import {
    CATEGORY_ADD_FAIL,
    CATEGORY_ADD_REQUEST,
    CATEGORY_ADD_RESET,
    CATEGORY_ADD_SUCCESS,
    CATEGORY_FETCH_FAIL,
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_RESET,
    CATEGORY_FETCH_SUCCESS
  } from '../constants/categoryConstant'
  
  export const addPCategoryReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_ADD_REQUEST:
        return { categoryloading: true }
      case CATEGORY_ADD_SUCCESS:
        return { categoryloading: false, categoryresponse: action.payload,
          isCategoryAdd : true}
      case CATEGORY_ADD_FAIL:
        return { categoryloading: false, categoryerror: action.payload }
      case CATEGORY_ADD_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const fetchCategoryReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_FETCH_REQUEST:
        return { categoryloading: true }
      case CATEGORY_FETCH_SUCCESS:
        return { categoryloading: false, categoryresponse: action.payload }
      case CATEGORY_FETCH_FAIL:
        return { categoryloading: false, categoryerror: action.payload }
      case CATEGORY_FETCH_RESET:
        return {}
      default:
        return state
    }
  }
  