export default class Puerta {
    static totalPuertasAbiertas = 0; 
    #estado = "Cerrada";

    constructor (material, color, tipoContraseña){
        this.material = material;
        this.color = color;
        this.tipoContraseña = tipoContraseña;
    }

    abrir(){
        this.#estado = "Abierta";
        Puerta.totalPuertasAbiertas++;
    }

    get estado(){
        return this.#estado;
    }

    static mostrarNumeroPuertasAbiertas(){
        return Puerta.totalPuertasAbiertas;
    }

}