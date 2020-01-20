import axios from 'axios'

import {APP_URL} from '../../config/Config'


const url = APP_URL.concat('cart')

export const getCart = (id,token)=>{
  return {
    type: 'GET_CART',
    payload: axios.get(url.concat(`/${id}`),{
        headers: {
            Authorization: 'Bearer ' + token 
        }
      })
  }
}
