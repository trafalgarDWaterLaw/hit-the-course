var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('public'))
app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});
app.use('/static', express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(8080);