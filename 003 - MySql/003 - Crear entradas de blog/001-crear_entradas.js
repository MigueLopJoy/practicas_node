var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: '1234',
    database: 'nodejs'
})

connection.connect(err => {
    if (err) throw err
    // connection.query('CREATE DATABASE nodejs', (err, result) => {
    //     if (err) throw err
    //     console.log('Se ha creado la base de datos')
    // })
    connection.query(`
        CREATE TABLE entries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255),
            text TEXT,
            date VARCHAR(255)
        )
        `, (err, result) => {
        if (err) throw err
        console.log('Se ha creado la tabla')
    })
})