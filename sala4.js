const caja = document.getElementById("caja");
const texto = document.getElementById("datos");

// mousemove para ver la posicion del raton y mostramos por pantalla. 
caja.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;

  texto.innerText = `Coordenadas del ratón en la caja: X=${x}, Y=${y}`;
});

// click para poder ver donde se hizo click y si coincide con el centro
caja.addEventListener("click", function (e) {
  // para saber ancho y alto de la caja
  let anchoCaja = caja.offsetWidth;
  let altoCaja = caja.offsetHeight;

  let clickX = e.offsetX;
  let clickY = e.offsetY;

  if ((clickX = anchoCaja / 2) && (clickY = altoCaja / 2)) {
    caja.style.backgroundColor = "red";
    alert(
      `Has pulsado justo en centro de la caja !! felicidades ! `,
    );
  } else {
    caja.style.backgroundColor = "red";
    alert(`NO has pulsado en el centro justo, vuelve a intentarlo... `);
  }
});
