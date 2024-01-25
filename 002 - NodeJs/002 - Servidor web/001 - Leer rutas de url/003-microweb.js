var servidor = require('http')

servidor.createServer(function(req, res){
    fecha = new Date()
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write("<h1>Hola mundo desde node js: "+ fecha.getFullYear() + "</h1>")
    res.write(`
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Sobre nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
        </ul>
    `)
    switch (req.url) {
        case "/":
            res.end("<h2>Esta es la página de incio</h2>")
            break
        case "/about":
            res.end("<h2>Esta es la página sobre nosotros</h2>")
            break
        case "/contact":
            res.end("<h2>Esta es la página de contacto</h2>")
            break
        default:
            res.end("<h2>Página no encontrada</h2>")
            break
    }
    console.log("Alguien ha cargado la web")
}).listen(80)