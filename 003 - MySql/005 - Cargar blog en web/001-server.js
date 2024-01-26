var servidor = require('http')
var route = require('url')
var files = require('fs')
var processor = require('querystring')
var mysql = require('mysql')


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: '1234',
    database: 'nodejs'
})

connection.connect(err => {
    if (err) throw err
    console.log("conectado")
})

function readHeader(callback) {
    files.readFile("./templates/header.html", (err, data) => {
        if (err) throw err
        callback(data)
    })
}

function readFooter(callback) {
    files.readFile("./templates/footer.html", (err, data) => {
        if (err) throw err
        callback(data)
    })
}

servidor.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var fullRoute = route.parse(req.url, true)

    readHeader(header => {
        res.write(header)

        switch (req.url) {
            case "/":
            case "/home":
                files.readFile("index.html", (err, data) => {
                    res.write(data)
                    readFooter(footer => {
                        res.write(footer)
                        res.end("")
                    })
                })
                break

            case "/contact":
                files.readFile("contact.html", (err, data) => {
                    res.write(data)
                    readFooter(footer => {
                        res.write(footer)
                        res.end("")
                    })
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
                    readFooter(footer => {
                        res.write(footer)
                        res.end("")
                    })
                })
                break

            case "/blog":
                files.readFile("blog.html", (err, data) => {

                    connection.query(`
                            SELECT * FROM entries
                        `, (err, result, fields) => {
                        if (err) throw err
                        for (let i = 0; i < result.length; i++) {
                            res.write(`
                                    <article>
                                        <h3>${result[i].title}</h3>
                                        <time>${result[i].date}</time>
                                        <p>${result[i].text}</p>
                                    </article>
                                `)
                        }
                    })

                    res.write(data)
                    readFooter(footer => {
                        res.write(footer)
                        res.end("")
                    })
                })
                break

            default:
                files.readFile("notfound.html", (err, data) => {
                    res.write(data)
                    readFooter(footer => {
                        res.write(footer)
                        res.end("")
                    })
                })
                break
        }

        if (req.url !== "/favicon.ico") {
            var date = new Date()
            files.appendFile("registro.txt", `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}: ${fullRoute.host}, ${fullRoute.pathname}, ${fullRoute.search}, ${req.url} \n`, err => {
                if (err) throw err
            })
        }
    })
}).listen(8080)
