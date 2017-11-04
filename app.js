const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const apiRoute = require('./routes/api.js')
const cookieSession = require('cookie-session')

//设置静态路径
app.use(express.static(path.join(__dirname,'public')))

//配置body解析器（解析请求体的格式）
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//cookie
app.use(cookieSession({
  name: 'session',
  secret: 'hello kitty',
  maxAge: 1000*3600*24
}))

//使用路由
app.use('/api',apiRoute)

//监听端口号
app.listen(process.env.PORT || '3000')