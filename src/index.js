import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes/routes'

import configureStore from './redux/store'
import { Provider } from 'react-redux'
//TODO: redux store
const preloadedState = window.context.state
console.log(JSON.stringify(preloadedState))

const store = configureStore(preloadedState)

console.log("now client")

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {renderRoutes(routes)}
            </BrowserRouter>
        </Provider>
    )
}
ReactDOM.hydrate(<Root/>, document.getElementById('root'))