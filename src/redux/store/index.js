import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer'
import thunk from 'redux-thunk'

const configureStore = (initStore = {}) => createStore(rootReducer, initStore, applyMiddleware(thunk))

export default configureStore
