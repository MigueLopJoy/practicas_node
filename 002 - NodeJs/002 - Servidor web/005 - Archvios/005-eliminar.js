var files = require('fs')
files.unlink("cambio.txt", "w", err => {
    if (err) throw err
    console.log("Misión cumplida")
})