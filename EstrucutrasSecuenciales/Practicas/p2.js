let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', puntos);
}

function puntos() {
    let correctas = Number(document.getElementById('correctas').value);
    let incorrectas = Number(document.getElementById('incorrectas').value);
    let blanco = Number(document.getElementById('blanco').value);

    let puntaje = 0;
    puntaje = (correctas * 4) + (incorrectas * -1) + (blanco * 0);
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = puntaje;
}