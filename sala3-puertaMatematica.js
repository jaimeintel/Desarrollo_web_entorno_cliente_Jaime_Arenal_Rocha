import Puerta from "./sala3-puerta.js";

export default class PuertaMatematica extends Puerta{

    constructor (material, color, tipoContraseña, problema, solucion){
        super(color, material, tipoContraseña);
        this.problema = problema;
        this.solucion = solucion;
    }
}