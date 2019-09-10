let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', regalo);
}

function regalo() {

    let dinero = Number(document.getElementById('dinero').value);

    let imprimirResultado = document.getElementById('resultado');

    if (dinero <= 10) {
        imprimirResultado.innerHTML =
            `<p> Se suguere comprar una TARJETA. </p>`;
    }
    if ((dinero > 10) && (dinero <= 100)) {
        imprimirResultado.innerHTML =
            `<p> Se suguere comprar  CHOCOLATES. </p>`;
    }
    if ((dinero > 100) && (dinero <= 250)) {
        imprimirResultado.innerHTML =
            `<p> Se suguere comprar  FLORES. </p>`;
    }
    if (dinero > 250) {
        imprimirResultado.innerHTML =
            `<p> Se suguere comprar  un ANILLO. </p>`;
    }


}