import Puerta from "./sala3-puerta.js";

export default class PuertaAcertijo extends Puerta{

    constructor (material, color, tipoContraseña, acertijo, respuesta){
        super(color, material, tipoContraseña);
        this.acertijo = acertijo;
        this.respuesta = respuesta;
    }
    
    mostrarAcertijo(){
        return this.acertijo;
    }
    compararRespuesta(respuestaIn){
        if (respuestaIn.toLowerCase() == this.respuesta){
            return "Correcto, has acertado";
        }
        else{
            return "Respuesta incorrecta, prueba otra vez."
        }
    }
}