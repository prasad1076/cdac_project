import {
    PRODUCT_ADD_FAIL,
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_RESET,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_FETCH_FAIL,
    PRODUCT_FETCH_REQUEST,
    PRODUCT_FETCH_RESET,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_SINGLE_REQUEST,PRODUCT_FETCH_SINGLE_FAIL,PRODUCT_FETCH_SINGLE_RESET,PRODUCT_FETCH_SINGLE_SUCCESS,
    PRODUCT_UPDATE_FAIL,PRODUCT_UPDATE_REQUEST,PRODUCT_UPDATE_RESET,PRODUCT_UPDATE_SUCCESS
  } from '../constants/productConstant'
  
  export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_ADD_REQUEST:
        return { loading: true }
      case PRODUCT_ADD_SUCCESS:
        return { loading: false, response: action.payload, 
        isProductAdd : true}
      case PRODUCT_ADD_FAIL:
        return { loading: false, error: action.payload }
      case PRODUCT_ADD_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const fetchProductReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_FETCH_REQUEST:
        return { loading: true }
      case PRODUCT_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case PRODUCT_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case PRODUCT_FETCH_RESET:
        return {}
      default:
        return state
    }
  }


  export const fetchSingleProductReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_FETCH_SINGLE_REQUEST:
        return { loading: true }
      case PRODUCT_FETCH_SINGLE_SUCCESS:
        return { loading: false, response: action.payload }
      case PRODUCT_FETCH_SINGLE_FAIL:
        return { loading: false, error: action.payload }
      case PRODUCT_FETCH_SINGLE_RESET:
        return {}
      default:
        return state
    }
  }

  export const updateProductReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return { loading: true }
      case PRODUCT_UPDATE_SUCCESS:
        return { loading: false, response: action.payload }
      case PRODUCT_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case PRODUCT_UPDATE_RESET:
        return {}
      default:
        return state
    }
  }
  