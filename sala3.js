import Puerta from "./sala3-puerta.js";
import PuertaAcertijo from "./sala3-puertaAcertijo.js";
import PuertaMatematica from "./sala3-puertaMatematica.js";
import PuertaCultural from "./sala3-puertaCultural.js";

let puerta1 = new PuertaAcertijo(
  "Plastico",
  "Morado",
  "Acertijo",
  "Oro parece, plata no es",
  "platano",
);
let puerta2 = new PuertaMatematica(
  "Metal",
  "Gris",
  "Problema Matemático",
  " ¿Cuanto es 3 + 5?",
  8,
);
let puerta3 = new PuertaCultural(
  "Madera",
  "Marrón",
  "Pregunta Histórica",
  "¿En que año surge JavaScript?",
  1995,
);

// elementos a editar.

let boton1 = document.getElementById("puerta1");
let boton2 = document.getElementById("puerta2");
let boton3 = document.getElementById("puerta3");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let contador = document.getElementById("contador");

//PUERTA 1 - mostramos acertijo, input para respuesta y boton para enviar respuesta.
document.getElementById("puerta1").onclick = function () {
  let output_puerta1 = document.getElementById("output-puerta1");
  output_puerta1.innerHTML += `El acertijo es el siguiente: ${puerta1.mostrarAcertijo()}
    <br><br> Respuesta: <input type="text" id="respuesta-puerta1"><br> <button id="validar-puerta1">Comprobar</button><br><br>`;
  boton1.style.display = "none";

  // validamos respuesta y editamos elementos html
  document.getElementById("validar-puerta1").onclick = function () {
    let respuesta_puerta1 = document.getElementById("respuesta-puerta1").value;
    output_puerta1.innerHTML += puerta1.compararRespuesta(respuesta_puerta1);
    if (
      puerta1.compararRespuesta(respuesta_puerta1) == "Correcto, has acertado"
    ) {
      document.getElementById("img1").src = "images/puertaAcertijoAbierta.png";
      //contador puertas abiertas
      contador.innerHTML = `Puertas abiertas: ${Puerta.mostrarNumeroPuertasAbiertas()}/3`;
      comprobarResultado(); // comprobamos si suma 3 
    }
  };
};

//PUERTA 2
document.getElementById("puerta2").onclick = function () {
  let output_puerta2 = document.getElementById("output-puerta2");
  output_puerta2.innerHTML += `La operación matematica a resolver es: ${puerta2.mostrarProblema()}
  <br><br> Respuesta: <input type="text" id="respuesta-puerta2"><br> <button id="validar-puerta2">Comprobar</button><br><br>`;
  boton2.style.display = "none";

  // validamos respuesta y editamos elementos html
  document.getElementById("validar-puerta2").onclick = function () {
    let respuesta_puerta2 = +document.getElementById("respuesta-puerta2").value;
    output_puerta2.innerHTML += puerta2.compararRespuesta(respuesta_puerta2);
    if (
      puerta2.compararRespuesta(respuesta_puerta2) == "Correcto, has acertado"
    ) {
      document.getElementById("img2").src =
        "images/puertaMatematicaAbierta.png";
      //contador puertas abiertas
      contador.innerHTML = `Puertas abiertas: ${Puerta.mostrarNumeroPuertasAbiertas()}/3`;
      comprobarResultado(); // comprobamos si suma 3 
    }
  };
};

//PUERTA 3
document.getElementById("puerta3").onclick = function () {
  let output_puerta3 = document.getElementById("output-puerta3");
  output_puerta3.innerHTML += `La pregunta es: ${puerta3.mostrarPregunta()}
  <br><br> Respuesta: <input type="text" id="respuesta-puerta3"> <br><br><button id="validar-puerta3">Comprobar</button><br><br>`;
  boton3.style.display = "none";

  // validamos respuesta y editamos elementos html
  document.getElementById("validar-puerta3").onclick = function () {
    let respuesta_puerta3 = document.getElementById("respuesta-puerta3").value;
    output_puerta3.innerHTML += puerta3.compararRespuesta(respuesta_puerta3);
    if (
      puerta3.compararRespuesta(respuesta_puerta3) == "Correcto, has acertado"
    ) {
      document.getElementById("img3").src = "images/puertaCulturalAbierta.png";
      //contador puertas abiertas
      contador.innerHTML = `Puertas abiertas: ${Puerta.mostrarNumeroPuertasAbiertas()}/3`;
      comprobarResultado(); // comprobamos si suma 3 
    }
  };
};
// RESULTADO
function comprobarResultado() {
  if (Puerta.mostrarNumeroPuertasAbiertas() == 3) {

    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "¡ENOHORABUENA, HAS DESBLOQUEADO LAS 3 SALAS !";
  }
}


