let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcula);
}

function calcula() {
    let dia = Number(document.getElementById('dia').value);
    let imprimir = document.getElementById('resultado');
    if (dia == 1) {
        imprimir.innerHTML = `<p>LUNES </p>`;
    }
    if (dia == 2) {
        imprimir.innerHTML = `<p>MARTES </p>`;
    }
    if (dia == 3) {
        imprimir.innerHTML = `<p>MIERCOLES</p>`;
    }
    if (dia == 4) {
        imprimir.innerHTML = `<p>JUEVES</p>`;
    }
    if (dia == 5) {
        imprimir.innerHTML = `<p>VIERNES</p>`;
    }
    if (dia == 6) {
        imprimir.innerHTML = `<p>SABADO</p>`;
    }
    if (dia == 7) {
        imprimir.innerHTML = `<p>DOMINGO</p>`;
    }
}