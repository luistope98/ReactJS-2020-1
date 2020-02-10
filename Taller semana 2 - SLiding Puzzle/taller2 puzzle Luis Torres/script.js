//funcion para revolver
function revolver() {
    var orden;
    var random;
    var temp;
    var nuevo;
    orden = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let x = 0; x <= 8; x++) {
        random = Math.random() * (7) + 1;
        temp = orden[x];
        orden[x] = orden[parseInt(random, 10)];
        orden[parseInt(random, 10)] = temp;
    }

    for (let i = 1; i <= 9; i++) {
        nuevo = document.getElementsByClassName("p" + i)[0].className;
        document.getElementsByClassName("p" + i)[0].className = document.getElementsByClassName("p" + orden[i - 1])[0].className;
        document.getElementsByClassName("p" + orden[i - 1])[0].className = nuevo;
    }

}
//funcion para mover la imagen en las posiciones
function movimiento(posicion) {
    var fichablanca;
    var fichaescogida;
    var validacion;
    fichablanca = document.getElementsByClassName("p9")[0].id[3];
    fichaescogida = (posicion);
    validacion = fichablanca - fichaescogida;
    if (validacion == -1 || validacion == 1 || validacion == 3 || validacion == -3) {
        document.getElementsByClassName("p9")[0].className = document.getElementById("img" + (posicion)).className;
        document.getElementById("img" + (posicion)).className = "p9";
    }
}



