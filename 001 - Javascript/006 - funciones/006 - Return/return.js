function saluda(nombre, edad, telefono) {
    let saludo = ""
    saludo += "Me llamo " + nombre + "\n"
    saludo += "Tengo " + edad + " años" + "\n"
    saludo += "Mi teléfono es " + telefono + "\n"
    return saludo
}

console.log(saluda("Miguel", 26, "123456"))
console.log(saluda("Juan", 25, "234567"))