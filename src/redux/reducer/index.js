import { combineReducers } from 'redux'

import item from './Item'
import comment from './Comment'
import login from './Login'
import cart from './Cart'

const appReducer = combineReducers({
    item,
    comment,
    login,
    cart
})

export default appReducer