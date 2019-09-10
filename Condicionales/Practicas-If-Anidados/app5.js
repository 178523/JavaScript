let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', orden);
}

function orden() {

    let A = Number(document.getElementById('datoA').value);
    let B = Number(document.getElementById('datoB').value);
    let C = Number(document.getElementById('datoC').value);

    let imprimirResultado = document.getElementById('resultado');

    if ((A > B) && (B > C)) {

        imprimirResultado.innerHTML =
            `<p> El orden descendente de los numeros es: ${A} - ${B} - ${C}</p>`;
    }
    if ((A > C) && (C > B)) {

        imprimirResultado.innerHTML =
            `<p> El orden descendente de los numeros es: ${A} - ${C} - ${B}</p>`;
    }
    if ((B > A) && (A > C)) {

        imprimirResultado.innerHTML =
            `<p> El orden descendente de los numeros es: ${B} - ${A} - ${C}</p>`;
    }
    if ((B > C) && (C > A)) {

        imprimirResultado.innerHTML =
            `<p> El orden descendente de los numeros es: ${B} - ${C} - ${A}</p>`;
    }
    if ((C > A) && (A > B)) {

        imprimirResultado.innerHTML =
            `<p> El orden descendente de los numeros es: ${C} - ${A} - ${B}</p>`;
    }
    if ((C > B) && (B > A)) {

        imprimirResultado.innerHTML =
            `<p> El orden descendente de los numeros es: ${C} - ${B} - ${A}</p>`;
    }

}