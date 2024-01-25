var files = require('fs')
files.writeFile("myFile.txt", "Este es el segundo contenido del archivo", "w", err => {
    if (err) throw err
    console.log("Misión cumplida")
})