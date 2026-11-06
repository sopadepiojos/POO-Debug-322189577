// Archivo asignado a: Alex
// Objetivo: que el programa corra sin errores en Node.js

class Animal {
  #nombre;
  #edad;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  getNombre() {
    return this.#nombre;
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(nuevaEdad) {
    if (nuevaEdad > 0) {
      this.#edad = nuevaEdad;
    }
  }

  hacerSonido() {
    console.log(this.#nombre + " hace un sonido");
  }
}

class Perro extends Animal {
  #raza;

  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.#raza = raza;
  }

  getRaza() {
    return this.#raza;
  }

  hacerSonido() {
    console.log(this.getNombre() + " (" + this.#raza + ") dice: Guau");
  }
}

class Gato extends Animal {
  #color;

  constructor(nombre, edad, color) {
    super(nombre, edad);
    this.#color = color;
  }

  getColor() {
    return this.#color;
  }

  hacerSonido() {
    console.log(this.getNombre() + " (" + this.#color + ") dice: Miau");
  }
}

class Zoologico {
  #nombreZoo;
  #animales = [];

  constructor(nombreZoo) {
    this.#nombreZoo = nombreZoo;
  }

  agregarAnimal(animal) {
    this.#animales.push(animal);
  }

  mostrarAnimales() {
    console.log("Animales de " + this.#nombreZoo);
    for (let i = 0; i < this.#animales.length; i++) {
      let a = this.#animales[i];
      console.log("- " + a.getNombre() + ", " + a.getEdad() + " anios");
      a.hacerSonido();
    }
  }
}

// Zona de pruebas
let zooAlex = new Zoologico("Zoologico de Alex");
let perro1 = new Perro("Rex", 5, "Labrador");
let gato1 = new Gato("Misu", 3, "gris");

zooAlex.agregarAnimal(perro1);
zooAlex.agregarAnimal(gato1);

zooAlex.mostrarAnimales();
