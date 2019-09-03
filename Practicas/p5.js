let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', tota);
}

function tota() {
    let metros = Number(document.getElementById('metros').value);
    let costo = Number(document.getElementById('costo').value);

    let total = 0;
    total = metros * costo;
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = total;
}