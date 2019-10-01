let boton = document.getElementById('boton');
evento();


function evento() {
    boton.addEventListener('click', mostrar);
}


async function mostrar() {
    let velocidad = Number(document.getElementById('velocidad').value);
    let grado = Number(document.getElementById('grado').value);

    let proyectil = new Proyectil(velocidad, grado);

    for (let tiempo = 0; tiempo <= 10; tiempo += 0.01) {

        let posicionX = proyectil.CalcularVelocidadX(tiempo);
        let posicionY = proyectil.CalcularVelocidadY(tiempo);

        if (posicionX >= 0 && posicionY >= 0 && posicionX <= 100 && posicionY <= 100) {
            await stop(proyectil, posicionX, posicionY);
        }

    }
}

function stop(proyectil, posicionX, posicionY) {
    return new Promise((res, rej) => {
        setTimeout(() => res(proyectil.CrearSpan(posicionX, posicionY), 200))
    })
}