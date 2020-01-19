import { combineReducers } from 'redux'

import item from './Item'
import comment from './Comment'

const appReducer = combineReducers({
    item,
    comment
})

export default appReducer