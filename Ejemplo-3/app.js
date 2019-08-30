let btnCalcular = document.getElementById('btnCalcular');
//Se invoca a la función "eventListener"
eventListener();

//Se crea la función "eventListener" para encapsular los objetos que llevaran el método de "eventListener". 
function eventListener() {
    btnCalcular.addEventListener('click', ObtenerArea);
}

function ObtenerArea() {
    //Se obtiene el valor de los inputs y se covierte a un numero
    let Base = Number(document.getElementById('Base').value);
    let Altura = Number(document.getElementById('Altura').value);
    let resultado = 0;
    resultado = (Base * Altura) / 2;
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = resultado;

}