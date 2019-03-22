import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { StaticRouter }  from 'react-router'
import { matchRoutes } from 'react-router-config'
import router from '../src/router/router'

import configureStore from '../src/redux/store'
import { Provider } from 'react-redux'

export default async function render (ctx, next) {
    //match routes
    const branch = matchRoutes(router, ctx.url)
    const promises = branch.map(({route, match}) => {
        return route.loadData
            ? route.loadData(match)
            : Promise.resolve(null)
    })
    await Promise.all(promises)

    //redux store
    const store = configureStore()
    
    const Root = () => (
        <Provider store={store}>
            <StaticRouter
            location={ctx.url}
            context={context}>
                <App/>
            </StaticRouter>
        </Provider>
    )

    const html = ReactDOMServer.renderToString(<Root/>)

    const preloadedState = store.getState()

    ctx.body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>koa-React服务器渲染</title>
        </head>
        
        <body>
          <div id='root'>
            ${html}
          </div>
          <script>
            window.__PRELOADED_STATE__= ${JSON.stringify(preloadedState)}
          </script>
        </body>
        </html>
    `
}