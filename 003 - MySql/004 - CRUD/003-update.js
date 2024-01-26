var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: '1234',
    database: 'nodejs'
})

connection.connect(err => {
    if (err) throw err
    connection.query(`
        UPDATE entries
        SET title = 'Título modificado'
        WHERE id = 1;
        `, (err, result) => {
        if (err) throw err
        console.log('Se ha actualizado el registro')
    }
    )
})