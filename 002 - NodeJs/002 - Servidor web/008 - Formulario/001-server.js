var servidor = require('http')
var route = require('url')
var files = require('fs')
var processor = require('querystring')

servidor.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    var fullRoute = route.parse(req.url, true)
    switch (req.url) {
        case "/":
        case "/home":
            files.readFile("index.html", (err, data) => {
                res.write(data)
                res.end("")            
            })
            break
        case "/contact":
            files.readFile("contact.html", (err, data) => {
                res.write(data)
                res.end("")            
            })         
        break
        case "/process":
            let data = ''
            req.on('data', chunk => {
                data += chunk.toString()
            })
            req.on('end', () => {
                var string = data
                var processed = processor.parse(string)
                console.log(processed)
            })
        break
        case "/about":
            files.readFile("about.html", (err, data) => {
                res.write(data)
                res.end("")            
            })         
            break
        default:
            files.readFile("notfound.html", (err, data) => {
                res.write(data)
                res.end("")            
            })           
            break
    }
    if (req.url !== "/favicon.ico") {
        var date = new Date
        files.appendFile("registro.txt", `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}: ${fullRoute.host}, ${fullRoute.pathname}, ${fullRoute.search}, ${req.url} \n`, err => {
            if (err) throw err
        })
    }
}).listen(80)
