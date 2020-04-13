var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
// app.use(serveStatic(__dirname))
var port = process.env.PORT || 5000
app.use(express.static(__dirname + '/api/front'));
app.get(/.*/, (req, res) =>{
    res.sendFile(__dirname + '/index.html')
});
app.listen(port)
console.log('server started ' + port)