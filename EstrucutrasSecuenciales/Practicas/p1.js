let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', distancia);
}

function distancia() {
    let velocidad = Number(document.getElementById('velocidad').value);
    let tiempo = Number(document.getElementById('tiempo').value);
    let distancia = 0;
    distancia = velocidad * tiempo;
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = distancia;
}