const caja = document.getElementById("caja");
const texto = document.getElementById("datos");
const info = document.getElementById("info");
const pista = document.getElementById("pista");

// funcion para escribir mensajes por patnalla
function log(texto) {
  info.innerHTML = texto + "<br>";
}

// ancho y alto de caja
let anchoCaja = Math.round(caja.offsetWidth);
let altoCaja = Math.round(caja.offsetHeight);

console.log(`Ancho caja ${anchoCaja}, Alto caja ${altoCaja}`)

// mousemove para ver la posicion del raton y mostramos por pantalla.
caja.addEventListener("mousemove", function (e) {
  let x = Math.round(e.offsetX);
  let y = Math.round(e.offsetY);

  if (x == anchoCaja / 2 && y == altoCaja / 2) {
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
    log(`Has pulsado justo en centro de la caja !! felicidades ! `);
    info.innerHTML += `<br><button onclick='empezarOtraVez()'>Empezar juego otra vez</button>`;
  } else {
    caja.style.backgroundColor = "red";
    log(`NO has pulsado en el centro justo, vuelve a intentarlo... `);
  }
});

// pista usando stopPropagation

pista.addEventListener("click", function(e) {
    log("Pista: El centro es 102 x 102");

    e.stopPropagation(); 

    // Si no estuviese stopPropagation, se ejecutarian todos los addEventlistener 
    // incluido poner la caja en rojo y el mensaje de derrota. 

});
















function empezarOtraVez() {
    window.location.href = "sala1.html";
}