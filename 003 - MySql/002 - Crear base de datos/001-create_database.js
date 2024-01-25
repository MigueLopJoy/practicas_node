var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nosejs',
    passowrd: '1234'
})

connection.connect(err => {
    if (err) throw err
    console.log(conectado)
    connection.query('CREATE DATABASE nodejs', (err, result) => {
        if (err) throw err
        console.log('Se ha creado la base de datos')
    })
})