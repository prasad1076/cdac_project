import { ORDER_FETCH_REQUEST, ORDER_FETCH_SUCCESS, ORDER_FETCH_FAIL ,  
    ORDER_FETCH_RESET   } from '../constants/orderConstants';

import axios from 'axios'

export const getSingleOrder = (orderId) => {
    return (dispatch) => {
      dispatch({
        type: ORDER_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
      
      const url = 'http://localhost:8080/supplier/get_currOrderDetails/'+orderId
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: ORDER_FETCH_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: ORDER_FETCH_FAIL,
            payload: error,
          })
        })
    }
  }