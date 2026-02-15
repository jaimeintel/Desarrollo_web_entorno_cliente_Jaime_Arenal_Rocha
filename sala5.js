const prendas = document.querySelectorAll(".prenda");
const gorra1 = document.getElementById("gorra1");
const armario = document.getElementById("armario");
const muñeco = document.getElementById("muñeco");
const parte_cuerpo = document.querySelectorAll(".parte-cuerpo");

let prendaElegida


// bucle para saber donde se arrastra
parte_cuerpo.forEach((parte_cuerpo) => {
  parte_cuerpo.addEventListener("dragover", dragOver);
  parte_cuerpo.addEventListener("dragenter", dragEnter);
  parte_cuerpo.addEventListener("dragleave", dragLeave);
  parte_cuerpo.addEventListener("drop", dragDrop);
});

// evento
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
    prendaElegida = e.target.id
  console.log(`${prendaElegida} comenzo a ser arrastrada`);
}
function dragEnd(e) {
  console.log(`${e.target.id} dejó de ser arrastrada`);
}
function dragOver(e) {
    e.preventDefault() // esto permite q funcione soltar
  //console.log(`Prenda esta siendo arrastrado sobre ${e.target.id}`)
}
function dragEnter(e) {
e.target.classList.add('sombreada')
  console.log(`Prenda ha entrado en  ${e.target.id}`);
}
function dragLeave(e) {
  console.log(`Prenda ha salido de ${e.target.id}`);
}
function dragDrop(e) {
  console.log(`Prenda se ha soltado en ${e.target.id}`);
  let elementoReal = document.getElementById(prendaElegida)
  e.target.appendChild(elementoReal)
  e.target.classList.remove('sombreada');

}
