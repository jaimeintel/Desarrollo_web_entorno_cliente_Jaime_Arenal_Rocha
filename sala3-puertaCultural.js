import Puerta from "./sala3-puerta.js";

export default class PuertaCultural extends Puerta{

    constructor (material, color, tipoContraseña, pregunta, respuesta){
        super(color, material, tipoContraseña);
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }

    
}