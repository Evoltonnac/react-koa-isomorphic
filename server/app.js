const Koa = require('koa')
const app = new Koa()
const path = require('path')
const koaStatic = require('koa-static')
const koaRouter = require('koa-router')
const router = new koaRouter()
const bodyParser = require('koa-bodyparser')
import render from '../dist/bundle_server'

//pre handle post request
app.use(bodyParser())

//get static resources:bundles and assets
app.use(koaStatic(path.join(__dirname,'..','dist')))

//all get request renderToString
router.get('*',render)
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000,() => {
    console.log('server started')
})