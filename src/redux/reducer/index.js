import { combineReducers } from 'redux'

import item from './Item'
import comment from './Comment'
import login from './Login'

const appReducer = combineReducers({
    item,
    comment,
    login
})

export default appReducer