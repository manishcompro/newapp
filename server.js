
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/feature', function (req, res) {
    res.sendfile( __dirname + '/dist/features.html');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})