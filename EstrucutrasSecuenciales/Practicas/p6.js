let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', pulgadas);
}

function pulgadas() {
    let metros = Number(document.getElementById('metros').value);

    let total = 0;
    total = metros * 39.3701;
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = total;
}