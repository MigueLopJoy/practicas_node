var servidor = require('http')

servidor.createServer(function(req, res){
    fecha = new Date()
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write("<h1>Hola mundo desde node js: "+ fecha.getFullYear() + "</h1>")
    res.end(req.url)
    console.log("Alguien ha cargado la web")
}).listen(80)