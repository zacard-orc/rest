/**
 * Created by linly on 14-10-16.
 */

var http=require('http');



http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello China\n');
}).listen(6666, '0.0.0.0');
console.log('Server running at http:/172.16.142.21:6666/');