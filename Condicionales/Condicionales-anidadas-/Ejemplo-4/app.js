let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', promedio);
}



function promedio() {
    let persona = Number(document.getElementById('persona').value);
    let imprimir = document.getElementById('resultado');
    let costo = 0;

    if (persona <= 200) {
        costo = persona * 95
        imprimir.innerHTML = `<p>El costo por platillo es de $95. El costo total es de ${costo} </p>`;
    }
    if ((persona > 200) || (persona == 300)) {
        costo = persona * 85
        imprimir.innerHTML = `<p>El costo por platillo es de $85. El costo total es de $${costo} </p>`;
    }
    if (persona > 300) {
        costo = persona * 75
        imprimir.innerHTML = `<p>El costo por platillo es de $75. El costo total es de ${costo} </p>`;
    }

}