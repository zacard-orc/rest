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
