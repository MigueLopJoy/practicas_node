var files = require('fs')
files.rename("myFile.txt", "cambio.txt", "w", err => {
    if (err) throw err
    console.log("Misión cumplida")
})