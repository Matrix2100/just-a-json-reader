var express = require('express'),
    app     = express(),
    port    = 3333;

const util = require('util')

app.listen(port);

app.post('/api/', function (req, res) {
    // print to console
    printJsonRecusively(req.body);
    // just call res.end(), or show as string on web
    res.send(req.body);
});

function printJsonRecusively(obj){
    let body = '';
    printJsonRecusively(obj, body);
    console.log(body);
}

function printJsonRecusively(obj, strg) {
    if (typeof obj === 'object') {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                strg += util.format('%s: %s\n', key, obj[key]);
                printJsonRecusively(obj[key]);
            } 
        }
    }
}

