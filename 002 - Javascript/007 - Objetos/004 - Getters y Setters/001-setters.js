class Persona {
    constructor() {
        this.edad = 0
        this.nombre = ""
    }
    setEdad(edad) {
        this.edad = edad
    }
    setNombre(nombre) {
        this.nombre = nombre
    }
    saluda() {
        console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años")
    }
}
var persona = new Persona()
console.log(persona)
persona.setEdad(26)
persona.setNombre("Miguel")