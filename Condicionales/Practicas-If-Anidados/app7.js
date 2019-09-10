let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', descuento);
}

function descuento() {

    let C1 = Number(document.getElementById('cifra1').value);
    let C2 = Number(document.getElementById('cifra2').value);
    let C3 = Number(document.getElementById('cifra3').value);

    let imprimirResultado = document.getElementById('resultado');

    if ((C1 == C3)) {
        imprimirResultado.innerHTML =
            `<p> El número es el mismo al revés: ${C1}${C2}${C3} y ${C3}${C2}${C1} </p>`;

    } else {

        imprimirResultado.innerHTML =
            `<p> El número NO es el mismo al revés: ${C1}${C2}${C3} y ${C3}${C2}${C1}</p>`;
    }

}