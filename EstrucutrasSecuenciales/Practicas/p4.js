let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', distancia);
}

function distancia() {
    let ax = Number(document.getElementById('ax').value);
    let ay = Number(document.getElementById('ay').value);
    let bx = Number(document.getElementById('bx').value);
    let by = Number(document.getElementById('by').value);

    let distancia = 0;
    distancia = Math.sqrt(Math.pow((bx - ax), 2) + Math.pow((by - ay), 2));
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = distancia;
}