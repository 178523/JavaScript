let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', multiplo);
}

function multiplo() {

    let N1 = Number(document.getElementById('num1').value);
    let N2 = Number(document.getElementById('num2').value);

    let imprimirResultado = document.getElementById('resultado');

    if ((N1 % N2 == 0) || (N2 % N1 == 0)) {

        imprimirResultado.innerHTML =
            `<p> El número ${N1} es multiplo de ${N2}. </p>`;
    } else {
        imprimirResultado.innerHTML =
            `<p> El número ${N1} NO es multiplo de ${N2}. </p>`;
    }
}