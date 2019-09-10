let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', letras);
}

function letras() {

    let CAL = Number(document.getElementById('calificacion').value);

    let imprimirResultado = document.getElementById('resultado');

    if (CAL == 10) {
        imprimirResultado.innerHTML = 'A';
    }
    if (CAL == 9) {
        imprimirResultado.innerHTML = 'B';
    }
    if (CAL == 8) {
        imprimirResultado.innerHTML = 'C';
    }
    if ((CAL == 7) || (CAL == 6)) {
        imprimirResultado.innerHTML = 'D';
    }
    if ((CAL <= 5) && (CAL >= 0)) {
        imprimirResultado.innerHTML = 'F';
    }
}