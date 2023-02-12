class Persona {
  constructor(nombre, apellidos, direccion) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellidos}`;
  }

  toString() {
    return `${this.apellidos} ${this.direccion}`;
  }
}

class Coche {
  constructor(matricula, marca, modelo, propietario) {
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.propietario = propietario;
  }

  toString() {
    return `${this.matricula} ${this.marca} ${this.modelo}\npropietario: ${this.propietario}`;
  }
}

const jorge = new Persona("Jorge", "Washington Usa", "Casa Blanca s/n");
const barbara = new Persona("Bárbara", "Streissand Cine", "c/ Hollywood 345, 6° B");
const coches = [
  new Coche("GC1234SG", "Audi", "TT", jorge),
  new Coche("1234SDF", "Volkswagen", "Golf GTI", barbara),
];
