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
    return `<center><b>Animal</b></center> <br><br> Nombre: ${this.nombre}<br> Genero: ${this.genero}<br> Raza: ${this.raza}<br><br>`;
  }
}

const dog1 = new Animal("Firulais", "Macho", "Pitbull");


function showAnimal() {
  let container = document.querySelector(".container-animal");
  console.log(container);
  container.innerHTML = `<div class="container"> ${dog1.printAnimal()} </div>`;
}
showAnimal();
