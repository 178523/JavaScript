let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', cheque);
}

function cheque() {
    let hotel = Number(document.getElementById('hotel').value);
    let comida = Number(document.getElementById('comida').value);
    let dias = Number(document.getElementById('dias').value);

    let total = 0;
    total = (hotel * dias) + ((comida * 3) * dias) + (dias * 100);
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = total;
}