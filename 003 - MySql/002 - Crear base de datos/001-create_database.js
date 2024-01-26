var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: '1234'
})

connection.connect(function (err) {
    if (err) throw err
    connection.query('CREATE DATABASE nodejs', function (err, result) {
        if (err) throw err
        console.log('Se ha creado la base de datos')
    })
})