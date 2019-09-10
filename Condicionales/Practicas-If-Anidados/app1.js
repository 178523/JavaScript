let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', descuento);
}

function descuento() {

    let CT = Number(document.getElementById('costototal').value);

    let imprimirResultado = document.getElementById('resultado');

    if (CT >= 3600) {
        let preciofinal = 0;
        preciofinal = CT * .84;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${preciofinal} . Se aplico un descuento del 16 %. </p>`;

    } else {
        let preciofinal = 0;
        preciofinal = CT * .93;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${preciofinal} . Se aplico un descuento del 7 %. </p>`;
    }

}