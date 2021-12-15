function ligarLampada () {
    document.getElementById('lampada').src = "./img/ligada.png"
}

function desligarLampada(){
    document.getElementById('lampada').src = "./img/desligada.png"
}

function quebrarLampada(){
    document.getElementById('lampada').src = "./img/quebrada.png" 
}

document.getElementById('ligar').addEventListener('click', ligarLampada);
document.getElementById('desligar').addEventListener('click', desligarLampada);
document.getElementById('lampada').addEventListener('dblclick', quebrarLampada);