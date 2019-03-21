import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter }  from 'react-router'
//import router from '../src/router/router'

export default async function render (ctx, next) {
    //TODO:redux store
    const Root = () => (
        <Provider store={store}>
            <StaticRouter
            location={ctx.url}
            context={{}}>
                <App/>
            </StaticRouter>
        </Provider>
    )

    const html = ReactDOMServer.renderToString(<Root/>)
    
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
        </body>
        </html>
    `
}