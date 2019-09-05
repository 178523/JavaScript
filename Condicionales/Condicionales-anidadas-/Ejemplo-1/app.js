let boton = document.getElementById('boton');
let reset = document.getElementById('reset');
evento();

function evento() {
    boton.addEventListener('click', comparar);
    reset.addEventListener('click', res);
}

function res() {

}

function comparar() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);
    let imprimir = document.getElementById('resultado');

    if ((num1 > num2) && (num1 > num3)) {
        imprimir.innerHTML = `<p>El número A ${num1} es el número mayor</p>`;
    }
    if ((num2 > num1) && (num2 > num3)) {
        imprimir.innerHTML = `<p>El número B ${num2} es el número mayor</p>`;
    }
    if ((num3 > num1) && (num3 > num2)) {
        imprimir.innerHTML = `<p>El número C ${num3} es el número mayor</p>`;
    }
    if ((num1 == num2) && (num1 == num3)) {
        imprimir.innerHTML = `<p>Todos los numeros son iguales</p>`;
    }

}