class Persona {
    constructor() {
        this.edad = 0
        this.nombre = ""
    }
    saluda() {
        console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años")
    }
}
var persona = new Persona()
console.log(persona)
persona.edad = 26
persona.nombre = "Miguel"