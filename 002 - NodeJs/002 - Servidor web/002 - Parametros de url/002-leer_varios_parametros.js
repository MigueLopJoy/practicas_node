var servidor = require('http')
var route = require('url')

servidor.createServer(function(req, res){
    fecha = new Date()
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    var parameters = route.parse(req.url, true).query
    res.write("Tu nombre es " + parameters.name + ".")
    res.write("Tienes " + parameters.age) + " años"
}).listen(80)