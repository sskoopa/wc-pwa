var express = require('express')
var compression = require('compression')
var app = express() //create a web server
var morgan = require('morgan')
app.use(compression()) //support gzip in the webserver

app.set('etag', false) //don't send ETags (not working)

//log all requests to the console
app.use(morgan(':method :status :url :res[content-length] :response-time')) 

//serve all static files with some caching
app.use(express.static('.', { etag: false, maxAge: 3600000 }))

//send the app shell when there is no static file to send
app.use(function (req, res) {
    res.contentType('html')
    res.setHeader('Cache-Control', 'public, max-age=3600000, immutable');
    res.sendFile(__dirname + '/index.html')
})

//start the web server on port 9080
app.listen(9080)
console.log('app server started')
