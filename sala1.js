const CLAVE = Symbol("clave_secreta");
//console.log(CLAVE);
//console.log(CLAVE.toString)

let miCabeza = {} // vacía, no sabe el codigo. 

let elPapel = {
    [CLAVE]: "123456"
}

let puerta = {
    numeroPuerta : 1,
    cerrada: true,
    medidias: {
        altura: 200, 
        ancho: 80
    },
    validar: function(memoriaRecibida) { // hay que crear la funcion de esta manera al estar dentro de un obj. 
        
        if (memoriaRecibida[CLAVE] === "123456") {
            alert("La puerta se ha abierto, puedes pasar :)");
        } else {
            alert("NO PUEDES PASAR. No te sabes el código.");
        }
    }
}

// funcionalidad botones

function memorizarCodigo(){
    Object.assign(miCabeza, elPapel);
}

function abrirPuerta(){
    puerta.validar(miCabeza);
}


