function hint(params) {
    document.getElementById("puzzle").style.display = 'block';
    setTimeout(function () {
        document.getElementById("puzzle").style.display = 'none';
    }, 700);
}

function play(params) {

    var position;
    var numbers = [9, 7, 3, 5, 2, 4, 6, 8,null];
    //Declaramos el array
    var agenda = new Array(3);
    //Vamos a recorrerlo para meter en cada posición un array de 31
    var contador = 0;
    for (var i = 0; i < agenda.length; i++) {
        agenda[i] = new Array(3);
    }
    for (let j = 0; j < agenda.length; j++) {
        for (let k = 0; k < agenda.length; k++) {

            agenda[j][k] = numbers[contador];
            contador += 1;
        }

    }
    var content="";

    for (let index = 0; index <  8; index++) {
      content=content+"<div id='img"+numbers[index]+"'><img onclick=move('img"+numbers[index]+"')  id='images' src='assets/"+numbers[index]+".jpg'></div>";
    }
    content=content+"<div id='img1'><img id='images' src=''></div>";
    document.getElementById("game").innerHTML=content;
    console.log(numbers);
}


function move(b) {
    alert(b);
}