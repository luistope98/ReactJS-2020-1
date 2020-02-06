var enJuego=false;

function jugar(){
    if(!enJuego){
        document.querySelector(".boton").innerHTML = "En partida";
        var temporal1 = "cuadroVac"
        document.getElementById("cuadro33").className = temporal1;
        var fila;
        var columna;
        for (fila=1;fila<=3;fila++) {
            for (columna=1;columna<=3;columna++) {
                var fila2=Math.floor(Math.random()*3 + 1);
                var columna2=Math.floor(Math.random()*3 + 1);
                tradeo("cuadro"+fila+columna,"cuadro"+fila2+columna2);
            } 
        }
        enJuego = true;
    }
}

function jugada(y,x){
    if(enJuego){
        var cuadrado = document.getElementById("cuadro"+y+x).className;
        if(cuadrado!="cuadroVac"){
            if(y<3){
                if(document.getElementById("cuadro"+(y+1)+x).className=="cuadroVac"){
                    tradeo("cuadro"+y+x,"cuadro"+(y+1)+x);
                    terminar();
                    return;
                }
            } 
            if(y>1){
                if(document.getElementById("cuadro"+(y-1)+x).className=="cuadroVac"){
                    tradeo("cuadro"+y+x,"cuadro"+(y-1)+x);
                    terminar();
                    return;
                }
            } 
            if(x<3){
                if(document.getElementById("cuadro"+y+(x+1)).className=="cuadroVac"){
                    tradeo("cuadro"+y+x,"cuadro"+y+(x+1));
                    terminar();
                    return;
                }
            }
            if(x>1){
                if(document.getElementById("cuadro"+y+(x-1)).className=="cuadroVac"){
                    tradeo("cuadro"+y+x,"cuadro"+y+(x-1));
                    terminar();
                    return;
                }
            }
        }
    }
}

function tradeo(cuadrox,cuadroy){
    var temporal
    temporal = document.getElementById(cuadrox).className;
    document.getElementById(cuadrox).className = document.getElementById(cuadroy).className;
    document.getElementById(cuadroy).className = temporal;
}

function terminar(){
    if(document.getElementById("cuadro11").className == "cuadro1" && document.getElementById("cuadro12").className == "cuadro2" && document.getElementById("cuadro13").className == "cuadro3"
    && document.getElementById("cuadro21").className == "cuadro4" && document.getElementById("cuadro22").className == "cuadro5" && document.getElementById("cuadro23").className == "cuadro6"
    && document.getElementById("cuadro31").className == "cuadro7" && document.getElementById("cuadro32").className == "cuadro8" && document.getElementById("cuadro33").className == "cuadroVac"){
        document.getElementById("cuadro33").className = "cuadro9";
        document.querySelector(".boton").innerHTML = "¿Empezar de Nuevo?";
        enJuego = false;
    }
}

function reinicio(){
    if(enJuego){
        enJuego=false;
        document.getElementById("cuadro11").className = "cuadro1" 
        document.getElementById("cuadro12").className = "cuadro2" 
        document.getElementById("cuadro13").className = "cuadro3"
        document.getElementById("cuadro21").className = "cuadro4" 
        document.getElementById("cuadro22").className = "cuadro5"
        document.getElementById("cuadro23").className = "cuadro6"
        document.getElementById("cuadro31").className = "cuadro7"
        document.getElementById("cuadro32").className = "cuadro8"
        document.getElementById("cuadro33").className = "cuadro9"
        jugar();
    }
}