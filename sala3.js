import Puerta from "./sala3-puerta.js";
import PuertaAcertijo from "./sala3-puertaAcertijo.js";
import PuertaMatematica from "./sala3-puertaMatematica.js";
import PuertaCultural from "./sala3-puertaCultural.js";

let output = document.getElementById("output");

let puerta1 = new PuertaAcertijo ("Plastico", "Morado", "Acertijo", "Oro parece, plata no es", "platano");
let puerta2 = new PuertaMatematica ("Metal", "Gris", "Problema Matemático", " ¿Cuanto es 3 + 5", 8 );
let puerta3 = new PuertaCultural("Madera", "Marrón", "Pregunta Histórica", "¿En que año surge JavaScript?", 1995);

console.log(puerta1.mostrarAcertijo());
console.log(puerta1.compararRespuesta("MANZANA"))