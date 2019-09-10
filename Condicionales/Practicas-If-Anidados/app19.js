let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', transporte);
}

function transporte() {

    let Z = Number(document.getElementById('zona').value);
    let gramos = Number(document.getElementById('gramos').value);

    let imprimirResultado = document.getElementById('resultado');

    if (gramos <= 5000) {
        if (Z == 1) {
            let preciofinal = 0;
            preciofinal = gramos * 11;
            imprimirResultado.innerHTML =
                `<p> El costo total es: $${preciofinal}. </p>`;
        }
        if (Z == 2) {
            let preciofinal = 0;
            preciofinal = gramos * 10;
            imprimirResultado.innerHTML =
                `<p> El costo total es: $${preciofinal}. </p>`;
        }
        if (Z == 3) {
            let preciofinal = 0;
            preciofinal = gramos * 12;
            imprimirResultado.innerHTML =
                `<p> El costo total es: $${preciofinal}. </p>`;
        }
        if (Z == 4) {
            let preciofinal = 0;
            preciofinal = gramos * 24;
            imprimirResultado.innerHTML =
                `<p> El costo total es: $${preciofinal}. </p>`;
        }
        if (Z == 5) {
            let preciofinal = 0;
            preciofinal = gramos * 27;
            imprimirResultado.innerHTML =
                `<p> El costo total es: $${preciofinal}. </p>`;
        }
    }

    if (gramos > 5000) {
        imprimirResultado.innerHTML =
            `<p> Los paquetes con un peso superior a 5 kg no son transportados, por logística y seguridad. </p>`;
    }

}