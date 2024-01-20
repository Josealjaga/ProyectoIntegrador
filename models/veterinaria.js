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
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
printVeterinaria() {
    console.log(
      `Veterinaria - Nombre: ${this.nombre}, Direccion: ${this.direccion}, Telefono: ${this.telefono}`
    );
  }
}

const veterinaria1 = new Veterinaria("Mi mascota feliz", "Calle 123", 123456789).printVeterinaria();
