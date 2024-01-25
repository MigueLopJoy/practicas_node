var servidor = require('http')
var route = require('url')
var files = require('fs')

servidor.createServer(function(req, res){
    switch (req.url) {
        case "/":
        case "/home":
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
        case "/about":
            files.readFile("about.html", (err, data) => {
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
    if (req.url !== "/favicon.ico") {
        files.appendFile("registro.txt", `${req.url} \n`, err => {
            if (err) throw err
        })
    }
}).listen(80)