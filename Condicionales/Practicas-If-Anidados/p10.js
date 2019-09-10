let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcular);
}



function calcular() {
    let num = Number(document.getElementById('num').value);
    let imprimir = document.getElementById('resultado');
    let unidad = 0;
    let decena = 0;
    let centena = 0;
    let millar = 0;
    let n;
    n = num;

    unidad = num % 10;
    num = num - unidad;

    decena = num % 100;
    num = num - decena;

    centena = num % 1000;
    num = num - centena

    millar = num % 10000;
    num = num - millar;

    decena = decena / 10;
    centena = centena / 100;
    millar = millar / 1000;

    if (n < 10) {
        imprimir.innerHTML = `<p>Es capicúa</p>`;
    }
    if (n > 9 && n < 100) {
        if (unidad == decena) {
            imprimir.innerHTML = `<p>Es capicúa</p>`;
        } else {
            imprimir.innerHTML = `<p>No es capicúa</p>`;
        }
    }
    if (n > 99 && n < 1000) {
        if (unidad == centena) {
            imprimir.innerHTML = `<p>Es capicúa</p>`;
        } else {
            imprimir.innerHTML = `<p>No es capicúa</p>`;
        }
    }
    if (n > 999 && n < 10000) {
        if ((unidad == millar) && (decena == centena)) {
            imprimir.innerHTML = `<p>Es capicúa</p>`;
        } else {
            imprimir.innerHTML = `<p>No es capicúa</p>`;
        }
    }



}