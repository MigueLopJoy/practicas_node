var files = require('fs')
files.appendFile("myFile.txt", "Este es el contenido del archivo", err => {
    if (err) throw err
    console.log("Misión cumplida")
})