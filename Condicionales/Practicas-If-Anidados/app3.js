let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', costo);
}

function costo() {

    let H = Number(document.getElementById('horas').value);

    let imprimirResultado = document.getElementById('resultado');

    if (H <= 2) {
        let costofinal = 0;
        costofinal = H * 5;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${costofinal} . </p>`;
    }
    if ((H > 2) && (H <= 3)) {
        let costofinal = 0;
        costofinal = H * 4;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${costofinal} . </p>`;
    }
    if ((H > 3) && (H <= 5)) {
        let costofinal = 0;
        costofinal = H * 3;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${costofinal} . </p>`;
    }
    if ((H > 5) && (H <= 10)) {
        let costofinal = 0;
        costofinal = H * 2;
        imprimirResultado.innerHTML =
            `<p> El costo total es: $${costofinal} . </p>`;
    }

}