let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', calcula);
}

function calcula() {
    let imprimir = document.getElementById('resultado');
    let distanciaAgs = 70;
    let distanciaZac = 150;
    let DistAmbos = distanciaZac - distanciaAgs;

    while (DistAmbos > 0) {
        distanciaAgs++;
        distanciaZac--;
        DistAmbos = distanciaZac - distanciaAgs;
    }
    if (DistAmbos == 0) {
        distanciaAgs = distanciaZac;
    } else {
        distanciaAgs = distanciaAgs - 0.5;
    }

    resultado.innerHTML = `<p>El punto de encuentro es en el KM ${distanciaAgs} </p>`;
}