const caja = document.getElementById("caja");
const texto = document.getElementById("datos");

// ancho y alto de caja 
let anchoCaja = caja.offsetWidth;
let altoCaja = caja.offsetHeight;

// mousemove para ver la posicion del raton y mostramos por pantalla.
caja.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;

  if (x == anchoCaja / 2 && y == altoCaja / 2){
    caja.style.backgroundColor = "green";
  }

  texto.innerText = `Coordenadas del ratón en la caja: X=${x}, Y=${y}`;
});

caja.addEventListener("mouseenter", () => {
  caja.style.cursor = "url('images/objetivo2.png'), auto";
});

// click para poder ver donde se hizo click y si coincide con el centro
caja.addEventListener("click", function (e) {
  // para saber ancho y alto de la caja

  let clickX = e.offsetX;
  let clickY = e.offsetY;

  if (clickX == anchoCaja / 2 && clickY == altoCaja / 2) {
    caja.style.backgroundColor = "green";
    alert(`Has pulsado justo en centro de la caja !! felicidades ! `);
  } else {
    caja.style.backgroundColor = "red";
    alert(`NO has pulsado en el centro justo, vuelve a intentarlo... `);
  }
});
