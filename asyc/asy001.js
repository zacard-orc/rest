/**
 * Created by linly on 14-10-13.
 */


var as_x=require('async');
var moment=require('moment');
var log=require('./t').log;


var now=moment();
console.log(now.format('dddd, MMMM Do YYYY,h:mm:ss a'));  //Monday, October 13th 2014,9:57:04 pm
console.log(now.format('YYYYMMDD-hh:mm:ss'));  //20141013-09:57:55
console.log(now.format('YYYYMMDD hh:mm:ss:SSS'));  //20141013-09:59:05 024
console.log(now.add(7,'days').subtract(1,'hours').format('YYYYMMDD hh:mm:ss:SSS'))   //20141020 09:05:20:737
/*
 Monday, October 13th 2014,10:05:20 pm
 20141013-10:05:20
 20141013 10:05:20:737
 20141020 09:05:20:737
 */

/* 3件事情并行执行，没有异常产生 */
var arr=[{name:'Jack', delay: 2000},
         {name:'Mike', delay: 1000},
         {name:'Freewind', delay: 3000}];

as_x.each(arr,function(item,callback){
    log('1.1 enter:'+item.name);
    setTimeout(function(){
            log('1.1 handle:'+item.name);
            callback(null,item.name);
            },item.delay);
},function(err){
    log('1.1 err:'+err);
});

