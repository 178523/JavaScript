let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcula);
}

function calcula() {
    let edad1 = Number(document.getElementById('edad1').value);
    let edad2 = Number(document.getElementById('edad2').value);
    let res = 0;
    let imprimir = document.getElementById('resultado');

    if (edad1 <= edad2) {
        res = edad2;
        diferencia = edad2 - edad1;
        imprimir.innerText = res + ' Y la diferenca de edad es: ' + diferencia;
    } else {
        res = edad1;
        diferencia = edad1 - edad2;
        imprimir.innerText = res + ' Y la diferenca de edad es ' + diferencia;
    }
}