import Puerta from "./sala3-puerta.js";

export default class PuertaMatematica extends Puerta {

    constructor(material, color, tipoContraseña, problema, solucion) {
        super(color, material, tipoContraseña);
        this.problema = problema;
        this.solucion = solucion;
    }
    mostrarProblema() {
        return this.problema;
    }
    compararRespuesta(solucionIn) {
        if (solucionIn == this.solucion) {
            this.abrir();// para sumar al contador de puertas abiertas... 
            return "Correcto, has acertado";
        }
        else {
            return "Respuesta incorrecta, recarga la página para volver a empezar."
        }
    }
}