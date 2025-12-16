const CLAVE = Symbol("clave_secreta");

let miCabeza = {} // vacía, no sabe el codigo. 

let elPapel = {
    [CLAVE]: "123456",
    color : "blanco",
    densidad : "300g"
}

let puerta = {
    numeroPuerta : 1,
    cerrada: true,
    medidias: {
        altura: 200, 
        ancho: 80
    },
    validar: function(memoria) { // hay que crear la funcion de esta manera al estar dentro de un obj. 
        
        if (memoria[CLAVE] === "123456") {
            alert("La puerta se ha abierto, puedes pasar :)");
            window.location.href = "sala2.html";
        } else {
            alert("NO PUEDES PASAR. No te sabes el código.");
        }
    }
}

// botones

function memorizarCodigo(){
    Object.assign(miCabeza, elPapel);
}

function abrirPuerta(){
    puerta.validar(miCabeza);
}


// mostrar por consola algun symbol incluyebdo descripcion 

console.log(CLAVE, "(1)");
console.log(CLAVE.toString, "(2)");

//let clone = structuredClone(puerta);  ----> no podemos clonar de esta manera el objeto porque tiene una funcion
//console.log(clone)

//Clonar algún objeto y mostrar las propiedades del original y el objeto clonado por consola.
let clone2 = structuredClone(elPapel);
console.log(elPapel, "(3)") // el objeto original con el symbol que no se va a copiar. 
console.log(clone2 , "(4)"); // aqui podemos ver como se ha clonado el objeto. En el caso del Symbol no lo copia. 