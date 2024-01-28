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
    return `<center><b>Persona</b></center> <br><br> Nombre: ${this.nombre}<br> Apellido: ${this.apellido}<br> Edad: ${this.edad}<br> Cedula: ${this.cedula}`;
  }
}

const persona1 = new Persona("Jose", "Jaraba", 26, 123456789);

function showPersona() {
  let container = document.querySelector(".container-persona");
  console.log(container);
  container.innerHTML = `<div class="container"> ${persona1.printPersona()} </div>`;
}
showPersona();
