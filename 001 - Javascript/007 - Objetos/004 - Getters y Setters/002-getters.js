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
    getEdad(edad) {
        return this.edad
    }
    getNombre(nombre) {
        return this.nombre
    }
    saluda() {
        return ("Hola, me llamo " + nombre + " y tengo " + edad + " años")
    }
}
var persona = new Persona()
console.log(persona)
persona.setEdad(26)
persona.setNombre("Miguel")
console.log(persona.getEdad)
console.log(persona.nombre)
console.log(persona.saluda())