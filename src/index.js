import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

import configureStore from './redux/store'
import { Provider } from 'react-redux'
//TODO: redux store
const preloadedState = window.__PRELOADED_STATE__ || undefined

delete window.__PRELOADED_STATE__

const store = configureStore(preloadedState)

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        </Provider>
    )
}
ReactDOM.hydrate(<Root/>, document.getElementById('root'))