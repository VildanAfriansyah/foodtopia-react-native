import axios from 'axios'
import qs from 'qs'

import {APP_URL} from '../../config/Config'


const url = APP_URL.concat('user')


export const postUser = (data)=>{
  return {
    type: 'POST_USER',
    payload: axios.post(url.concat(`/login`),data)
  }
}