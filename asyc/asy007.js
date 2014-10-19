/**
 * Created by z30 on 14-10-18.
 */
/**
 * Created by linly on 14-10-14.
 */

var as_x=require('async');
var moment=require('moment');
var log=require('./t').log;

var arr = [{name:'Jack', delay:2000},
    {name:'Mike', delay: 1000},
    {name:'Freewind', delay:3000},
    {name:'Test', delay: 500}];

var f_col={
    'f_a':function(a,b){console.log(a+b);return a+b;},
    'f_b':function(a,c){console.log(a+c);return a+c;},
    'f_c':function(a,d){console.log(a+d);return a+d;},
    'f_d':function(a,e){console.log(a+e);return a+e;}
}


var f_par_x={
    'f_a':10,
    'f_b':20,
    'f_c':30,
    'f_d':40
}

var f_par_y={
    'f_a':1,
    'f_b':2,
    'f_c':3,
    'f_d':4
}

var tasks=['f_a','f_b','f_c','f_d'];

log('1.1 starts: ');
a=0;
as_x.mapSeries(tasks,function(item,callback){

    setTimeout(function()
        {
            console.log(a);
            console.log(tasks[a]);
            a++;
            callback(null,f_col[item](f_par_x[item],f_par_y[item]));
            f_par_x[tasks[a]]=99;
        }
        ,1000);
},function(err,results){
    log('1.1 results: ', results);
});
/*
 as_x.map(tasks,function(item,callback){
 //f_col[item](f_par_x[item],f_par_y[item]);
 setTimeout(function()
 {callback(null,f_col[item](f_par_x[item],f_par_y[item]));}
 ,1000);
 },function(err,results){
 log('1.1 results: ', results);
 });


 as_x.map(tasks, function(item, callback) {
 if (item=='f_c') callback('myerr');
 else callback(null,f_col[item](f_par_x[item],f_par_y[item]));
 }, function(err, results) {
 log('1.2 err: ', err);
 log('1.2 results: ', results);
 });

 as_x.mapSeries(tasks,function(item,callback){
 //f_col[item](f_par_x[item],f_par_y[item]);
 setTimeout(function()
 {callback(null,f_col[item](f_par_x[item],f_par_y[item]));}
 ,1000);
 },function(err,results){
 log('1.1 results: ', results);
 });

 */

//as_x.mapLimit() 单批最多执行两个程序

/*
 18
 11
 04.266> 1.2 results: [ 18, 11, undefined ]
 160
 */

/* 对集合中的每一个元素，执行某个异步操作，得到结果。
 所有的结果将汇总到最终的callback里。与each的区别是，
 each只关心操作不管最后的值，而map关心的最后产生的值。

 * 提供了两种方式：
 * 1. 并行执行。同时对集合中所有元素进行操作，结果汇总到最终callback里。
 *    如果出错，则立刻返回错误以及已经执行完的任务的结果，未执行完的占个空位
 * 2. 顺序执行。对集合中的元素一个一个执行操作，结果汇总到最终callback里。
 *    如果出错，则立刻返回错误以及已经执行完的结果，未执行的被忽略。
 */
/*
 as_x.map(arr, function(item, callback) {
 log('1.1 enter: ' + item.name);
 setTimeout(function() {
 log('1.1 handle: ' + item.name);
 callback(null, item.name + '!!!');
 }, item.delay);
 }, function(err,results) {
 log('1.1 err: ', err);
 log('1.1 results: ', results);
 });
 */





