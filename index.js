var express = require('express')
var compression = require('compression')
var app = express()
var morgan = require('morgan')
app.use(compression())

app.set('etag', false)

app.use(morgan(':method :status :url :res[content-length] :response-time'))
app.use(express.static('.', { etag: false, maxAge: 3600000 }))//, {maxAge: 3600000})) //TODO set this in deploy config

app.use(function (req, res) {
    res.contentType('html')
    res.setHeader('Cache-Control', 'public, max-age=3600000, immutable');
    res.sendFile(__dirname + '/index.html')
})

app.listen(9080)
console.log('app server started')
