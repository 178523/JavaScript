let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', califica);
}

function califica() {
    let cal = Number(document.getElementById('cal').value);
    let res = '';
    if (cal <= 8) {
        res = 'Reprobado';
    } else {
        res = 'Aprobado';
    }
    if ((cal > 10) || (cal < 0)) {
        res = 'Calificación inválida'
    }
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = res;
}