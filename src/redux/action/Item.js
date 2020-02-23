import axios from 'axios'
// import qs from 'qs'

import {APP_URL} from '../../config/Config'


const url = APP_URL.concat('item/')


<<<<<<< HEAD
export const getItems = (search = '')=>{
  return {
    type: 'GET_ITEMS',
    payload: axios.get(url.concat(`?search[item_name]=${search}`))
=======
export const getItems = ()=>{
  return {
    type: 'GET_ITEMS',
    payload: axios.get(url.concat(`show/?page=1&limit=9`))
>>>>>>> 7fc6ea7c74534ee110ec3baef7183d6cff2ea68d
  }
}

export const getItem = (id)=>{
  return {
    type: 'GET_ITEM_BY_ID',
    payload: axios.get(url.concat(`${id}`))
  }
}
