let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcula);
}

function calcula() {
    let unidad = Number(document.getElementById('unidad').value);
    let res = 0;
    let imprimir = document.getElementById('resultado');
    res = unidad * 6;

    if (res > 100) {
        imprimir.innerText = 'El número de unidades fabricadas son ' +
            res + '. Incentivo APROBADO';
    } else {
        imprimir.innerText = 'El número de unidades fabricadas son ' +
            res + '. Incentivo  NO APROBADO';
    }
}