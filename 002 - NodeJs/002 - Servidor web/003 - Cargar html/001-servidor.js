var servidor = require('http')
var files = require('fs')

servidor.createServer(function(req, res){
    fecha = new Date()

    files.readFile("index.html", (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(data)
    })
}).listen(80)