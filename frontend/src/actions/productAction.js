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
  import axios from 'axios'
  
  export const addProduct = (name,description,price,status,categoryType) => {
    return (dispatch) => {
      dispatch({
        type: PRODUCT_ADD_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
         // token: sessionStorage['token'],
        },
      }
  
      const body = {
        name,description,price,status,categoryType
      }
      console.log('categoryType')
      const url = 'http://localhost:8080/product/add-product'
      axios
        .post(url, body, header)
        .then((response) => {
          dispatch({
            type: PRODUCT_ADD_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: PRODUCT_ADD_FAIL,
            payload: error,
          })
        })
    }
  }
  
  export const getProducts = () => {
    return (dispatch) => {
      dispatch({
        type: PRODUCT_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
         // token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:8080/product/product-list'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: PRODUCT_FETCH_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: PRODUCT_FETCH_FAIL,
            payload: error,
          })
        })
    }
  }

  export const getSingleProduct = (id) => {
    return (dispatch) => {
      dispatch({
        type: PRODUCT_FETCH_SINGLE_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          //token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:8080/product/get-product-by-id/'+id
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: PRODUCT_FETCH_SINGLE_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: PRODUCT_FETCH_SINGLE_FAIL,
            payload: error,
          })
        })
    }
  }


  export const updateProduct = (id,name,description,price,status,categoryType) => {
    return (dispatch) => {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          //token: sessionStorage['token'],
        },
      }
      const body = {
        id,name,description,price,status,categoryType
      }
      const url = 'http://localhost:8080/product/update-product/'+id
      axios
        .put(url, body,header)
        .then((response) => {
          dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error,
          })
        })
    }
  }
  