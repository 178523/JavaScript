let boton = document.getElementById('boton');
let contador = 0;

evento();

function evento() {
    boton.addEventListener('click', ahorro);
}

function ahorro() {
    if (contador < 12) {
        contador++;
        ahorro = Number(document.getElementById('ahorro').value);
        let spanAhorro = document.createElement('span');
        spanAhorro.setAttribute('id', `ahorroMensual${contador}`)
        let textoSpan = document.createTextNode(`${ahorro}`);
        spanAhorro.appendChild(textoSpan);

        let ImprimirSpan = document.getElementById(`mes${contador}`);
        ImprimirSpan.appendChild(spanAhorro);
        calcularAhorro();
    }
}

function calcularAhorro() {
    let imprimirAhorroTotal = document.getElementById('total');
    let suma = 0;
    for (let i = 1; i < contador; i++) {
        let valorObtenido = document.getElementById(`ahorroMensual${i}`).value;
        suma = suma + Number(valorObtenido);
    }
    let spanTotal = document.createElement('span');
    let TextoTotal = document.createTextNode(`  $${suma}`);
    spanTotal.appendChild(TextoTotal);
    imprimirAhorroTotal.appendChild(spanTotal);
}