/**
 * Class Person
 * nombre: first name of the person.
 * apellido: last name of the person.
 * edad: age of the person.
 * cedula: id of the person.
*/
class Personas {
  nombre;
  apellido;
  edad;
  cedula;
  constructor(nombre, apellido, edad, cedula) {
    this.nombre = Jose;
    this.apellido = Jaraba;
    this.edad = 26;
    this.cedula = 123456789;
  }
}

/**
 * Class Animales
 * nombre: name of the animal.
 * genero: gender of the animal.
 * raza: breed of the animal.
 */
class Animales {
  nombre;
  genero;
  raza;
  constructor(nombre, genero, raza) {
    this.nombre = "Perro";
    this.genero = "Macho";
    this.raza = "Pastor Aleman";
  }
}

/**
 * Class Veterinaria
 * nombre: name of the stablishment.
 * direccion: address of the stablishment.
 * telefono: phone number of the stablishment.
 */
class Veterinaria {
  nombre;
  direccion;
  telefono;
  constructor(nombre, direccion, telefono) {
    this.nombre = "Veterinaria";
    this.direccion = "Calle 123";
    this.telefono = 123456789;
  }
}
