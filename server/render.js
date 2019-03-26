import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { StaticRouter }  from 'react-router'
import { matchRoutes, renderRoutes } from 'react-router-config'
import routes from '../src/routes/routes'

import configureStore from '../src/redux/store'
import { Provider } from 'react-redux'

const render = async(ctx, next) => {
    //match routes
    const branch = matchRoutes(routes, ctx.url)
    const promises = branch.map(({route, match}) => {
        return route.loadData
            ? route.loadData(match)
            : Promise.resolve(null)
    })
    await Promise.all(promises)
    console.log(ctx.url)
    //redux store
    const store = configureStore()
    
    const Root = () => {
        return (
          	<Provider store={store}>
              	<StaticRouter
              	location={ctx.url}
              	context={{}}>
                  	{renderRoutes(routes)}
              	</StaticRouter>
          	</Provider>
        )
    }

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
          <script type="text/javascript" src="bundle_client.js"></script>
        </body>
        </html>
    `
}

export default render