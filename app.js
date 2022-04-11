var express = require('express'),
    app     = express(),
    port    = 3333;

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(port);


app.post('/api/', jsonParser, function (req, res) {
    // print to console
    console.log(req.body);

    // just call res.end(), or show as string on web
    res.send(JSON.stringify(req.body, null, 4));
});

