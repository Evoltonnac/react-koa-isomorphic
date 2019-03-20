const Koa = require('koa')
const app = new Koa()
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const KoaRouter = require('koa-router')
const router = new KoaRouter()

const render = require('./render')

app.use(bodyParser())

app.use(static(path.join(__dirname,'../public')))

app.listen(3000,() => {
    console.log('server started')
})