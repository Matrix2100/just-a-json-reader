var express = require('express'),
    app     = express(),
    port    = 3333;

app.listen(port);

app.post('/api/', function (req, res) {
    // print to console
    console.log(req.body);

    // just call res.end(), or show as string on web
    res.send(JSON.stringify(req.body));
});

