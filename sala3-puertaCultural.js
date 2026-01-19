import Puerta from "./sala3-puerta.js";

export default class PuertaCultural extends Puerta {

    constructor(material, color, tipoContraseña, pregunta, respuesta) {
        super(color, material, tipoContraseña);
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }
    mostrarPregunta() {
        return this.pregunta;
    }
    compararRespuesta(respuestaIn) {
        if (respuestaIn == this.respuesta) {
            this.abrir(); // para sumar al contador de puertas abiertas... 
            return "Correcto, has acertado";
        }
        else {
            return "Respuesta incorrecta, recarga la página para volver a empezar."
        }
    }
}