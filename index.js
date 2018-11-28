var express = require('express');

var app = express();

var router = require('./controller/router');

app.set("view engine","ejs");

// 路由中间件
app.use(express.static('./public'));

// router.showIndex 不需要传参，express 不是原生 node。
app.get('/',router.showIndex);

app.get('/:albumNum',router.showAlbum)

app.listen(3000); 