var express = require('express'),
    app     = express(),
    port    = 3333

const util = require('util')

app.use(express.json())

app.listen(port)

app.post('/api/', function (req, res) {
    // print to console
    // console.log(req.body);
    printJsonRecusively(req.body)
    // just call res.end(), or show as string on web
    res.send("req.boAdy")
});

function printJsonRecusively(obj) {
    var text = printJsonRecusively2(obj, '')
    console.log(text)
    console.log(" \n")
}

function printJsonRecusively2(obj, text) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] == "object") {
                text +=  key + "-> "
                // console.log(key)
                text = printJsonRecusively2(obj[key], text)
            } else {
                text += "\n" + key + "-> " + obj[key] + ", "
                // console.log(key + " -> " + obj[key])
            }
        }
    }
    return text
} 