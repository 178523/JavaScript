let boton = document.getElementById('boton');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let imprimir = document.getElementById('resultado');
evento();

function evento() {
    boton.addEventListener('click', califica);
    num1.addEventListener('blur', validarDatos);
    num2.addEventListener('blur', validarDatos);
}

//Se recibe el parametro event debido a que el método "addEventListener" esta invocando la función válidarDatos
function validarDatos(event) {

    // console.log(event) //Te muestra todos los atributos del objeto
    // console.log(event.target.value)//Ingresa al evento target que tiene el contenido

    if (isNaN(event.target.value)) {
        event.target.focus();
        imprimir.innerHTML = 'Valores inválidos, es necesario ingresar números';
    } else {
        imprimir.innerHTML = '';
    }
    // console.log(isNaN(Number(num1.value)));
}

function califica() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let res = 0;
    if (num1 < num2) {
        res = num2;
    } else {
        res = num1;
    }
    imprimir.innerHTML = res;
    if (num1 == num2) {
        imprimir.innerHTML = 'Los números son iguales';
    }



}