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
    'f_b':function(a,c){console.log(a-c);return a-c;},
    'f_c':function(a,d){console.log(a+d);return a/d;},
    'f_d':function(a,e){console.log(a*e);return a*e;}
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

var tasks=['f_b','f_a','f_c','f_d'];

/**
 * 使用异步操作对集合中的元素进行筛选。需要注意的是，iterator的callback只有一个参数，
 * 只能接收true或false。
 *
 * 对于出错，该函数没有做出任何处理，直接由nodejs抛出。所以需要注意对Error的处理。
 *
 * async提供了两种方式：
 * 1. 并行执行：filter
 * 2. 顺序执行：filterSereis
 */

var tasks = [1,2,3,4,5];

as_x.filter(tasks, function(item, callback) {
    log('1.1 enter: ' + item);
    setTimeout(function() {
        log('1.1 test: ' + item);
        callback(item>=3);
    }, 200);
}, function(results) {
    log('1.1 results: ', results);
});

as_x.rejectSeries(tasks, function(item, callback) {
    log('1.1 enter: ' + item);
    setTimeout(function() {
        log('1.1 test: ' + item);
        callback(item>=3);
    }, 200);
}, function(results) {
    log('1.1 results: ', results);
});
