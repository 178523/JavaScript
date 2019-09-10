let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerBono);
}

function obtenerBono() {

    let sueldo = Number(document.getElementById('sueldo').value);
    let anti = Number(document.getElementById('antiguedad').value);
    let Tbono = document.getElementById('tipoBono').value;

    let imprimirResultado = document.getElementById('resultado');

    if (Tbono == 'A') {
        if ((anti >= 2) && (anti < 5)) {
            let bono = 0;
            bono = sueldo * .2;
            imprimirResultado.innerHTML =
                `<p> El bono será por: $${bono}</p>`;
        }
        if (anti >= 5) {
            let bono = 0;
            bono = sueldo * .3;
            imprimirResultado.innerHTML =
                `<p> El bono será por: $${bono}</p>`;
        }
    }
    if (Tbono == 'S') {
        if (sueldo <= 1000) {
            let bono = 0;
            bono = sueldo * .25;
            imprimirResultado.innerHTML =
                `<p> El bono será por: $${bono}</p>`;
        }
        if ((sueldo > 1000) && (sueldo <= 3500)) {
            let bono = 0;
            bono = sueldo * .15;
            imprimirResultado.innerHTML =
                `<p> El bono será por: $${bono}</p>`;
        }
        if (sueldo > 3500) {
            let bono = 0;
            bono = sueldo * .1;
            imprimirResultado.innerHTML =
                `<p> El bono será por: $${bono}</p>`;
        }
    }

}