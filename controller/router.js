exports.showIndex = function(req,res){
    // res.send('我是首页');
    res.render('index');
}

exports.showAlbum = function(req,res){
    res.send('相册'+ req.params.albumNum);
}