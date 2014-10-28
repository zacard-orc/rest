/**
 * Created by linly on 14-10-28.
 */


//express@3.4.8 node_modules\express.
    
var express  = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/2002',function(req,res){
    console.log(req.path);
    //console.log(req);
    res.set({'Content-Type':'text/json','Encodeing':'utf8'});
    res.send({msg:'SUCCESS'});
});

app.listen(5555,function(){
    console.log('RestFul Web is Started@5555');
});


