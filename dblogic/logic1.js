/**
 * Created by linly on 14-10-27.
 */


var as_x=require('async');
var moment=require('moment');
var log=require('../asyc/t').log;
var pool=require('./db.js');

sqldef={
    'update':function(b){return 'update xx_info set des=\'cccc\' where name=\''+b+'\';'},
    'select2':function(b){return 'select * from xx_info where name=\''+b+'\';'}
};

sqlset={
    'select':'select name from xx_id where id=\'112\';',
    'update':sqldef.update,
    'select2':sqldef.select2
};

//task是个数组
//sqlset是个字典

tasks=['1-select-0','2-update-1','3-select-0'];

WashRes=function(resobj){
  console.log(resobj instanceof Array);
};

//WashRes(sqlset);
//WashRes(tasks);


pool.getConnection(function(err, conn) {
    var proc_res;
    as_x.series({
        one: function(cb){
            sqls=sqlset['select'];
            conn.query(sqls,function (err, sqlres) {
                proc_res=sqlres[0]['name'];
                cb(null,sqlres);
            });
        },
        two: function(cb){
            sqls=sqlset['update'](proc_res);
            conn.query(sqls,function(err,sqlres){
                cb(null,sqlres);
                console.log(sqlres);
            });
        }
    },
    function(err,results){
        console.log(results);
        conn.release();
    });
});

