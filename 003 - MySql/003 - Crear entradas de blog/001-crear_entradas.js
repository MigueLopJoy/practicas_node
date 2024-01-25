var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nosejs',
    passowrd: '1234',
    database: 'nodejs'
})

connection.connect(err => {
    if (err) throw err
    console.log(conectado)
    // connection.query('CREATE DATABASE nodejs', (err, result) => {
    //     if (err) throw err
    //     console.log('Se ha creado la base de datos')
    // })
    // connection.query(`
    //     CREATE TABLE entries (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         title VARCHAR(255),
    //         text text(),
    //         date VARCHAR(255)
    //     )
    //     `, (err, result) => {
    //     if (err) throw err
    //     console.log('Se ha creado la tabla')
    // })
    connection.query(`
    INSERT INTO entries VALUES(
        NULL,
        "Titulo de la entrada",
        "Texto de la entrada",
        "2024-26-01"
    )
    `, (err, result) => {
    if (err) throw err
    console.log('Se ha insertado el registro')
})
})