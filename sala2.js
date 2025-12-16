
let receta = new Map();
let elegidos = new Set();
let intentos = 0;


receta.set("Garbanzos", "Correcto");
receta.set("Morcillo", "Correcto");
receta.set("Tocino", "Correcto");
receta.set("Chorizo", "Correcto");
receta.set("Morcilla", "Correcto");
receta.set("Gallina", "Correcto");
receta.set("Patata", "Correcto");
receta.set("Repollo", "Correcto");
receta.set("Sardinas", "Incorrecto");
receta.set("Lentejas", "Incorrecto");
receta.set("Judias", "Incorrecto");
receta.set("Queso", "Incorrecto");

let botones = document.getElementById("botones");

for (ingrediente of receta.keys()) {
    botones.innerHTML += `<button onclick="guardarSeleccion('${ingrediente}')">${ingrediente}</button>`;
}


function guardarSeleccion(ingredienteElegido) {
    elegidos.add(ingredienteElegido); // guardamos en set los ingredientes elegidos.

    let elegidosIngredientes = document.getElementById("elegidos");
    let intentosTexto = document.getElementById("intentos");
    let comentario = document.getElementById("comentario");

    elegidosIngredientes.innerHTML = [...elegidos].join(" "); // con esto mostramos el array elimiando corchetes. 
    if (receta.get(ingredienteElegido) === "Incorrecto") { // en caso de fallar.
        alert("Te has equivocado");
        elegidos.clear();// en caso de que se confunda borramos todo el set y limpiamos array de elegidos. 
        elegidosIngredientes.innerHTML = "";
        intentos += 1;
        intentosTexto.innerHTML = String(intentos + "/3");
    }

    if (intentos >= 3) {
        comentario.innerHTML = "Te has quedado sin intentos";
        return;

    }
    if (elegidos.size === 8) {

        comentario.innerHTML += "Felicidaes ! Lo has cosneguido, puedes ir a la siguiente sala :) <br><br>";
        comentario.innerHTML += `<button onclick="pasarSala3()">Siguiente Sala</button>`;
    }
}

function pasarSala3(){
    window.location.href = "sala3.html";
}
