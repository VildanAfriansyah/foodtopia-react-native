import axios from 'axios'
// import qs from 'qs'

import {APP_URL} from '../../config/Config'


const url = APP_URL.concat('item/')


export const getItems = ()=>{
  return {
    type: 'GET_ITEMS',
    payload: axios.get(url.concat(`show/?page=1&limit=9`))
  }
}

export const getItem = (id)=>{
  return {
    type: 'GET_ITEM_BY_ID',
    payload: axios.get(url.concat(`${id}`))
  }
}
