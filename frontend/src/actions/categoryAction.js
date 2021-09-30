import {
    CATEGORY_ADD_FAIL,
    CATEGORY_ADD_REQUEST,
    CATEGORY_ADD_RESET,
    CATEGORY_ADD_SUCCESS,
    CATEGORY_FETCH_FAIL,
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_RESET,
    CATEGORY_FETCH_SUCCESS,
    CATEGORY_UPDATE_FAIL,CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_RESET,CATEGORY_UPDATE_SUCCESS

  } from '../constants/categoryConstant'
  import axios from 'axios'

  export const addCategory = (name,description,thumbnails) => {
    return (dispatch) => {
      dispatch({
        type: CATEGORY_ADD_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const body = {
        name,description,thumbnails
      }
      const url = 'http://localhost:8080/category/add_category'
      axios
        .post(url, body, header)
        .then((response) => {
          dispatch({
            type: CATEGORY_ADD_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: CATEGORY_ADD_FAIL,
            payload: error,
          })
        })
    }
  }
  
  export const getCategory = () => {
    return (dispatch) => {
      dispatch({
        type: CATEGORY_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:8080/category/get_category'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: CATEGORY_FETCH_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: CATEGORY_FETCH_FAIL,
            payload: error,
          })
        })
    }
  }
  

  export const updateCategory = (id,name, description, thumbnails) => {
    return (dispatch) => {
      dispatch({
        type: CATEGORY_UPDATE_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
      const body = {
        id,name, description, thumbnails
      }
      const url = 'http://localhost:8080/category/update'
      axios
        .post(url, body,header)
        .then((response) => {
          dispatch({
            type: CATEGORY_UPDATE_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: CATEGORY_UPDATE_FAIL,
            payload: error,
          })
        })
    }
  }