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



var f_col={
    'f_a':function(a,b){console.log(a+b);},
    'f_b':function(a,c){console.log(a-c);},
    'f_c':function(a,d){console.log(a+d);},
    'f_d':function(a,e){console.log(a*e);}
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
as_x.each(tasks,function(item,callback){
    //console.log(item);
    f_col[item](f_par_x[item],f_par_y[item]);
    },
    function(err){
        console.log('err:'+err);
    });



/* 3件事情并行执行，没有异常产生，根据延时先后返回 */
/*
var arr=[{name:'Jack', delay: 2000, num:10},
         {name:'Mike', delay: 1000, num:20},
         {name:'Freewind', delay: 3000, num:30}];


as_x.each(arr,function(item,callback){
    log('1.1 enter:'+item.name);
    setTimeout(function(){
            log('1.1 handle:'+item.name);
            callback(null,item.name);
            },item.delay);
},function(err){
    log('1.1 err:'+err);
});
*/