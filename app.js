var express = require('express'),
    app     = express(),
    port    = 3333;

const util = require('util')

app.listen(port);

app.post('/api/', function (req, res) {
    // print to console
    console.log(util.inspect(myObject, {showHidden: false, depth: null, colors: true}))

    // just call res.end(), or show as string on web
    res.send(req.body);
});



