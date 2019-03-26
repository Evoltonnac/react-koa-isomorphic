const Koa = require('koa')
const app = new Koa()
const path = require('path')
const koaStatic = require('koa-static')
const koaRouter = require('koa-router')
const router = new koaRouter()
const bodyParser = require('koa-bodyparser')
import render from './render'

app.use(bodyParser())
console.log("aaaa");

app.use(koaStatic(path.join(__dirname,'..','dist')))

router.get('*',render)
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000,() => {
    console.log('server started')
})