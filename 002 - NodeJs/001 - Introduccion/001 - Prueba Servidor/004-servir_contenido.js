var servidor = require('http')

servidor.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end("Hola mundo desde node js")
}).listen(80)