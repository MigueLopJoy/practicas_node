var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: '1234'
})

connection.connect(err => {
    if (err) throw err
    console.log("conectado")
})