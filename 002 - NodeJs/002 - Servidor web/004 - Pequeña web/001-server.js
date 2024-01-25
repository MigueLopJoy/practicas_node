var servidor = require('http')
var route = require('url')
var files = require('fs')

servidor.createServer(function(req, res){
    switch (req.url) {
        case "/":
        case "/index.html":
            files.readFile("index.html", (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                res.end("")
            })
            break
        case "/contact":
            files.readFile("contact.html", (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'})   
                res.write(data)
                res.end("")
            })         
            break
        default:
            files.readFile("notfound.html", (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'}) 
                res.write(data)
                res.end("")
            })           
            break
    }
}).listen(80)