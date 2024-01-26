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
    SELECT * FROM entries
    `, (err, result, fields) => {
        if (err) throw err
        console.log(result)
    }
    )
})