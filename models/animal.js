/**
 * Class Animales
 * nombre: name of the animal.
 * genero: gender of the animal.
 * raza: breed of the animal.
 */
class Animal {
  nombre;
  genero;
  raza;
  constructor(nombre, genero, raza) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
  }
  printAnimal() {
    console.log(
      `Animal - Nombre: ${this.nombre}, Genero: ${this.genero}, Raza: ${this.raza}`
    );
  }
}

const perro1 = new Animal("Firulais", "Macho", "Pitbull").printAnimal();
