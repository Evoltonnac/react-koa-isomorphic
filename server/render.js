import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter }  from 'react-router'
import router from '../src/router/router'

module.exports.render = async(ctx, next) => {
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

}