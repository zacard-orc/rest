/**
 * Created by linly on 14-10-21.
 */


var async = require('async');
var t = require('./t');
var log = t.log;

/**
 * 按顺序依次执行一组函数。每个函数产生的值，都将传给下一个。
 * 如果中途出错，后面的函数将不会被执行。错误信息将传给waterfall最终的callback。之前产生的结果被丢弃。
 *
 * 这个函数名为waterfall(瀑布)，可以想像瀑布从上到下，中途冲过一层层突起的石头。
 *
 * 注意，该函数不支持json格式的tasks
 */
// async.waterfall(tasks, [callback]);

/**
 * 所有函数正常执行，每个函数的结果都将变为下一个函数的参数。
 *
 * 注意，所有的callback都必须形如callback(err, result)，但err参数在前面各函数中无需声明，它被自动处理。
 */
// 1.1



var a={
    'select':function(cb) { log('1.1.1: ', 'start'); cb(null, 'bdff'); },
    'insert':function(n, cb) { log('1.1.2: ',n); cb(null,'eee'); },
    'update':function(n, cb) { log('1.1.3: ',n); cb(null,'abc'); }
}

var tasks=[a.select,a.insert,a.update]

async.waterfall(tasks, function(err, result) {
    log('1.1 err: ', err);
    log('1.1 result: ', result);
});
/*
 async.waterfall([
 function(cb) { log('1.1.1: ', 'start'); cb(null, '2222222'); },
 function(n, cb) { log('1.1.2: ',n); cb(null,'eee'); },
 function(n, cb) { log('1.1.3: ',n); cb(null,'abc'); }
 ], function (err, result) {
 log('1.1 err: ', err);
 log('1.1 result: ', result);
 });

 async.waterfall([
 function(cb) { log('1.1.1: ', 'start'); cb(null, '2222222'); },
 function(n, cb) { log('1.1.2: ',n); cb(null, n*3); },
 function(n, cb) { log('1.1.3: ',n); cb(null, n+1); }
 ], function (err, result) {
 log('1.1 err: ', err);
 log('1.1 result: ', result);
 });


 async.waterfall([
 function(cb) { log('1.1.1: ', 'start'); cb(null, 3); },
 function(n, cb) { log('1.1.2: ',n); t.inc1(n, cb); },
 function(n, cb) { log('1.1.3: ',n); t.fire1(n*n, cb); }
 ], function (err, result) {
 log('1.1 err: ', err);
 log('1.1 result: ', result);
 });
async.waterfall([
    function(cb) { log('1.1.1: ', 'start'); cb(null, 3); },
    function(n, cb) { log('1.1.2: ',n); t.inc1(n, cb); },
    function(n, cb) { log('1.1.3: ',n); t.fire1(n*n, cb); }
], function (err, result) {
    log('1.1 err: ', err);
    log('1.1 result: ', result);
});
*/
//31.749> 1.1.1: start
//31.752> 1.1.2: 3
//31.953> 1.1.3: 4
//32.156> 1.1 err: null
//32.159> 1.1 result: 16

/**
 * 中途有函数出错，其err直接传给最终callback，结果被丢弃，后面的函数不再执行。
 */
