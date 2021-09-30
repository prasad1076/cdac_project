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
  
  export const addProduct = (name, description, price,weight,thumbnails,image,categoryaa) => {
    return (dispatch) => {
      dispatch({
        type: PRODUCT_ADD_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const body = {
        name, description, price,weight,thumbnails,image,categoryaa,
      }
      console.log(categoryaa)
      const url = 'http://localhost:8080/product/add_product'
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
          token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:8080/products/get_products'
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

  export const getSingleProduct = (productId) => {
    return (dispatch) => {
      dispatch({
        type: PRODUCT_FETCH_SINGLE_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:8080/products/get_product/'+productId
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


  export const updateProduct = (name, description, price,weight,thumbnails,image,categoryaa) => {
    return (dispatch) => {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
      const body = {
        name, description, price,weight,thumbnails,image,categoryaa,
      }
      const url = ''
      axios
        .post(url, body,header)
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