
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/feature', function (req, res) {
    res.sendfile( __dirname + '/dist/features.html');
})

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
})