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
    return `Veterinaria - Nombre: ${this.nombre}, Direccion: ${this.direccion}, Telefono: ${this.telefono}`;
  }
}

const veterinaria1 = new Veterinaria("Mi mascota feliz","Calle 123",123456789);

function showVeterinaria() {
  let container = document.querySelector(".container-veterinaria");
  console.log(container);
  container.innerHTML = `<div class="container"> ${veterinaria1.printVeterinaria()} </div>`;
}
showVeterinaria();
