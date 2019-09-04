let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcula);
}

function calcula() {
    let edad1 = Number(document.getElementById('edad1').value);
    let nom1 = document.getElementById('nom1').value;
    let edad2 = Number(document.getElementById('edad2').value);
    let nom2 = document.getElementById('nom2').value;
    let res = '';
    let imprimir = document.getElementById('resultado');

    if (edad1 <= edad2) {
        res = nom2;
        imprimir.innerText = nom2 + ' es el mayor y tiene ' + edad2 + ' años';
    } else {
        res = nom1;
        imprimir.innerText = nom1 + ' es el mayor y tiene ' + edad1 + ' años';
    }
}