const prendas = document.querySelectorAll(".prenda");
const gorra1 = document.getElementById("gorra1");
const armario = document.getElementById("armario");
const muñeco = document.getElementById("muñeco");
const parte_cuerpo = document.querySelectorAll(".parte-cuerpo");
const dimensiones = document.getElementById("dimensiones");
const contenedor = document.getElementById("contenedor");
const muñeco_vestido = document.getElementById("muñeco-vestido");

let prendaElegida;
let prendasCorrectas = 0;

// bucle para saber a donde se arrastra
parte_cuerpo.forEach((parte_cuerpo) => {
  parte_cuerpo.addEventListener("dragover", dragOver);
  parte_cuerpo.addEventListener("dragenter", dragEnter);
  parte_cuerpo.addEventListener("dragleave", dragLeave);
  parte_cuerpo.addEventListener("drop", dragDrop);
});

// bucle para saber que prenda se arrastra
prendas.forEach((prenda) => {
  prenda.addEventListener("drag", dragging);
  prenda.addEventListener("dragstart", dragStart);
  prenda.addEventListener("dragend", dragEnd);
});

// funciones
function dragging(e) {
  console.log(`${e.target.id} prenda siendo arrastrada`);
}
function dragStart(e) {
  prendaElegida = e.target.id; // se guarda id en variable de la prenda elegida
  console.log(`${prendaElegida} comenzo a ser arrastrada`);
}
function dragEnd(e) {
  console.log(`${e.target.id} dejó de ser arrastrada`);
}
function dragOver(e) {
  e.preventDefault(); // esto permite q funcione soltar
  console.log(`Prenda esta siendo arrastrado sobre ${e.target.id}`);
}
function dragEnter(e) {
  console.log(`Prenda ha entrado en  ${e.target.id}`);
  let parte_cuerpo = e.target.id;
  comprobarPrenda(prendaElegida, parte_cuerpo, e.target.classList);
}
function dragLeave(e) {
  console.log(`Prenda ha salido de ${e.target.id}`);
  e.target.classList.remove("sombreada-bien", "sombreada-mal");
}
function dragDrop(e) {
  console.log(`Prenda se ha soltado en ${e.target.id}`);
  let elementoReal = document.getElementById(prendaElegida); // se guarda elmento img que corresponde al id
  e.target.appendChild(elementoReal); // mete etiqueta (img) dentro del div  parte-cuerpo
  e.target.classList.remove("sombreada-bien"); // quita el sombreado una vez se suelta.
  e.target.classList.remove("sombreada-mal");

  comprobarVictoria(prendaElegida, e.target.id);
}

function comprobarPrenda(prenda, parte_cuerpo, elementoEditar) {
  if (
    (prenda == "gorra1" && parte_cuerpo == "cabeza") ||
    (prenda == "sudadera1" && parte_cuerpo == "torso") ||
    (prenda == "pantalon1" && parte_cuerpo == "piernas") ||
    (prenda == "zapatilla1" && parte_cuerpo == "pies")
  ) {
    elementoEditar.add("sombreada-bien");
  } else {
    elementoEditar.add("sombreada-mal");
  }
}

function comprobarVictoria(prenda, parte_cuerpo) {
  if (
    (prenda == "gorra1" && parte_cuerpo == "cabeza") ||
    (prenda == "sudadera1" && parte_cuerpo == "torso") ||
    (prenda == "pantalon1" && parte_cuerpo == "piernas") ||
    (prenda == "zapatilla1" && parte_cuerpo == "pies")
  ) {
    prendasCorrectas += 1;
  }
  if (prendasCorrectas == 4) {
    lanzarFormulario();
  }
}

// info sobre dimensiones pantalla
function actualizarDimensiones() {
  let ancho = window.innerWidth;
  let alto = window.innerHeight;
  console.log(`Pantalla : ancho ${ancho}px x alto ${alto}px`);
  dimensiones.innerText = `Dimensiones actuales de tu pantalla: Ancho ${ancho}px, Alto ${alto}px`;
}

window.addEventListener("resize", actualizarDimensiones); // resize, evento cuando cambias el tamaño de la ventana.

function lanzarFormulario() {
  contenedor.style.display = "none";
  muñeco_vestido.style.display = "block"; // esto es lo contrario de none

  
}
