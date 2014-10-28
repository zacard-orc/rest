/**
 * Created by linly on 14-10-27.
 */

var mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit : 10,
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database:'minfo',
    port: 3306
});