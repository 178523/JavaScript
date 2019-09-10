let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', uvas);
}

function uvas() {

    let PUI = Number(document.getElementById('preciouvainicial').value);
    let K = Number(document.getElementById('kilos').value);
    let tipo = document.getElementById('tipo').value;
    let tam = document.getElementById('tam').value;

    let imprimirResultado = document.getElementById('resultado');

    if ((tipo == 'A') && (tam == 1)) {
        let preciofinal = 0;
        preciofinal = (PUI + .20) * K;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${preciofinal} .</p>`;
    }
    if ((tipo == 'A') && (tam == 2)) {
        let preciofinal = 0;
        preciofinal = (PUI + .30) * K;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${preciofinal} .</p>`;
    }
    if ((tipo == 'B') && (tam == 1)) {
        let preciofinal = 0;
        preciofinal = (PUI - .30) * K;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${preciofinal} .</p>`;
    }
    if ((tipo == 'A') && (tam == 2)) {
        let preciofinal = 0;
        preciofinal = (PUI - .50) * K;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${preciofinal} .</p>`;
    }

}