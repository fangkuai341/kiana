const express = require('express')
const cookieParser = require('cookie-parser');
//const bodyParser=require('body-parser')
const server = express()
server.use(express.json({ limit: '50mb' }))
//引入中间件
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cookieParser());
server.use('/user', require('./router/user'));
server.use(express.static('../boke/dist'))
//server.use('/books', require('./router/books'));
// server.use('/account', require('./router/account'));
// server.use('/words', require('./router/word'));
// server.use('/move', require('./router/move'));
// server.use('/examine', require('./router/examine'));
server.listen(9090, () => {
    console.log('server is running at port 9090')
})