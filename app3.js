var express = require('express');

var app = express();

jspp=function(req,cb)
{
    var qss=''
    req.on('data',function(chunk)
    {
        qss+=chunk;
    });
    req.on('end',function(){
        cb(qss);
    });
};


//处理POST请求
//name和email是POST请求域中的参数名

app.post('/2002',function(req,res) {
   jspp(req,function(body){
       console.log(body);
       res.send('Post Over');
   });
});







//除了app.get、app.post这种形式外，还可以采用：app.all在这里all表示get,post等任何一种请求方式，当然也可以指定为某种特定的请求方式。
//或者app['get']('/path', function(req,res));这种形式。

//现在可以绑定和监听端口了，调用app.listen()方法，接收同样的参数，比如：
app.listen(5555);
console.log('Listening on port 5555');