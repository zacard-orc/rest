/**
 * Created by linly on 14-10-14.
 */

var as_x=require('async');
var moment=require('moment');
var log=require('./t').log;

var arr = [{name:'Jack', delay:200},
           {name:'Mike', delay: 100},
           {name:'Freewind', delay:300},
           {name:'Test', delay: 50}];

/* 对集合中的每一个元素，执行某个异步操作，得到结果。
  所有的结果将汇总到最终的callback里。与each的区别是，
  each只关心操作不管最后的值，而map关心的最后产生的值。

 * 提供了两种方式：
 * 1. 并行执行。同时对集合中所有元素进行操作，结果汇总到最终callback里。
 *    如果出错，则立刻返回错误以及已经执行完的任务的结果，未执行完的占个空位
 * 2. 顺序执行。对集合中的元素一个一个执行操作，结果汇总到最终callback里。
 *    如果出错，则立刻返回错误以及已经执行完的结果，未执行的被忽略。
 */

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


