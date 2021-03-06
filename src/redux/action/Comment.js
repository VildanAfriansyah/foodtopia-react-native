import axios from 'axios'
import qs from 'qs'

import {APP_URL} from '../../config/Config'


const url = APP_URL.concat('comment')

export const getCommentById = (id)=>{
  return {
    type: 'GET_COMMENT_BY_ID',
    payload: axios.get(url.concat(`/show/${id}`))
  }
}

export const postComment = (id_item,comment,rating,id_user)=>{
  return {
    type: 'POST_COMMENT',
    payload: axios.post(url.concat(`/`),qs.stringify(id_item,comment,rating,id_user))
  }
}