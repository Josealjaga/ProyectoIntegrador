/**
 * Class Person
 * nombre: first name of the person.
 * apellido: last name of the person.
 * edad: age of the person.
 * cedula: id of the person.
 */
class Persona {
  nombre;
  apellido;
  edad;
  cedula;
  constructor(nombre, apellido, edad, cedula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
  }
printPersona() {
    console.log(
      `Persona - Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Cedula: ${this.cedula}`
    );
  }
}

const persona1 = new Persona("Jose", "Jaraba", 26, 123456789).printPersona();