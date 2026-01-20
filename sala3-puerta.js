export default class Puerta {
  static #totalPuertasAbiertas = 0; // info global (privada) que afecta a todas las puetas 
  #estado = "Cerrada"; // propiedad privada, si se hace Puerta.#estado dará error. 

  constructor(material, color, tipoContraseña) {
    this.material = material;
    this.color = color;
    this.tipoContraseña = tipoContraseña;
  }

  abrir() {
    if (this.estado === "Cerrada") {
      this.#estado = "Abierta";
      Puerta.#totalPuertasAbiertas++; // se suma +1 puertas abiertas
    }
  }

  get estado() { // se crea metodo para saber estado 
    return this.#estado;
  }

  static mostrarNumeroPuertasAbiertas() { // metodo estatico para saber total de puertas abiertas. 
    return Puerta.#totalPuertasAbiertas;
  }
}
