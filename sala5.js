const prendas = document.querySelectorAll(".prenda");
const gorra1 = document.getElementById("gorra1");
const armario = document.getElementById("armario");
const muñeco = document.getElementById("muñeco");
const parte_cuerpo = document.querySelectorAll(".parte-cuerpo");

let prendaElegida;

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
  let parte_cuerpo = e.target.id
  comprobarPrenda(prendaElegida, parte_cuerpo, e.target.classList);
}
function dragLeave(e) {
  console.log(`Prenda ha salido de ${e.target.id}`);
  e.target.classList.remove("sombreada");
  e.target.classList.remove("sombreada-bien");
  e.target.classList.remove("sombreada-mal");
}
function dragDrop(e) {
  console.log(`Prenda se ha soltado en ${e.target.id}`);
  let elementoReal = document.getElementById(prendaElegida); // se guarda elmento img que corresponde al id
  e.target.appendChild(elementoReal); // mete etiqueta (img) dentro del div  parte-cuerpo
  e.target.classList.remove("sombreada-bien"); // quita el sombreado azul
  e.target.classList.remove("sombreada-mal");
}

function comprobarPrenda(prenda, parte_cuerpo, elementoEditar) {
  if (prenda == "gorra1" && parte_cuerpo == "cabeza") {
    elementoEditar.add("sombreada-bien");
  }
  if (prenda == "sudadera1" && parte_cuerpo == "torso") {
    elementoEditar.add("sombreada-bien");
  }
  if (prenda == "pantalon1" && parte_cuerpo == "piernas") {
    elementoEditar.add("sombreada-bien");
  }
  if (prenda == "zapatilla1" && parte_cuerpo == "pies") {
    elementoEditar.add("sombreada-bien");
  }
  else{
    elementoEditar.add("sombreada-mal");
  }
}
