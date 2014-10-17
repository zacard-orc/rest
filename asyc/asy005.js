/**
 * Created by linly on 14-10-17.
 */


var as_x=require('async');
var moment=require('moment');
var log=require('./t').log;
var http=require('http');
var url=require("url");


var now=moment();
console.log(now.format('dddd, MMMM Do YYYY,h:mm:ss a'));  //Monday, October 13th 2014,9:57:04 pm
console.log(now.format('YYYYMMDD-hh:mm:ss'));  //20141013-09:57:55
console.log(now.format('YYYYMMDD hh:mm:ss:SSS'));  //20141013-09:59:05 024
console.log(now.add(7,'days').subtract(1,'hours').format('YYYYMMDD hh:mm:ss:SSS'))   //20141020 09:05:20:737

var f_col={
    'f_a':function(a,b){console.log(a+b);return a+b;},
    'f_b':function(a,c){console.log(a-c);return a-c;},
    'f_c':function(a,d){console.log(a+d);return a/d;},
    'f_d':function(a,e){console.log(a*e);return a*e;}
}

var f_par_x={
    'f_a':100,
    'f_b':200,
    'f_c':300,
    'f_d':400
}

var f_par_y={
    'f_a':1100,
    'f_b':1200,
    'f_c':1300,
    'f_d':1400
}

var tasks=['f_b','f_a','f_c','f_d'];

var x=[ -1000, 1200, 0.23076923076923078, 560000 ];
console.log(x.join());

/*  0 元操作严格按照业务逻辑，但并发时会有阻塞

http.createServer(function(req,res){
    as_x.mapSeries(tasks,function(item,callback){
        // 1---最传统的执行
        callback(null,f_col[item](f_par_x[item],f_par_y[item]));


        // 2---串行执行的结果
        setTimeout(function()
            {callback(null,f_col[item](f_par_x[item],f_par_y[item]));}
            ,1000);

    },function(err,results){
        log('err:'+err);
        res.end(results.join());
});
}).listen(5555, '127.0.0.1',function(){
        console.log('Server has started 5555;')
    });
*/

http.createServer(function(req,res){
    as_x.mapSeries(tasks,function(item,callback){


        // 2---串行执行的结果
        setTimeout(function()
            {callback(null,f_col[item](f_par_x[item],f_par_y[item]));}
            ,1000);

    },function(err,results){
        log('err:'+err);
        res.end(results.join());
    });
}).listen(5555, '127.0.0.1',function(){
        console.log('Server has started 5555;')
    });