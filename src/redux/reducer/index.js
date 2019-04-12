import { combineReducers } from 'redux'
import { count } from './count'

const rootReducer = combineReducers({
    num: count,
})

export default rootReducer