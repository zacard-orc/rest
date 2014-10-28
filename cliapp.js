/**
 * Created by linly on 14-10-28.
 */

var http=require('http');

var options = {
    hostname: '127.0.0.1',
    port: 5555,
    path: '/2002',
    method: 'POST'
};

var xdata={'ID':'2222'};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(JSON.stringify(xdata));
req.end();