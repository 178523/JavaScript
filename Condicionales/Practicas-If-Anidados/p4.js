let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcular);
}



function calcular() {
    let presupuesto = Number(document.getElementById('presupuesto').value);
    let imprimir = document.getElementById('resultado');
    let desc = 0;
    let mx = 750;
    let pv = 224;
    let aca = 360;
    let can = 450;



    if (presupuesto < 224) {
        imprimir.innerHTML = `<p>Presupuesto bajo. Faltarian $ ${pv-presupuesto} para ir al destino "Puerto Vallarta"</p>`;
    }
    if (presupuesto >= 224) {
        imprimir.innerHTML = `<p>El destino podría ser "Puerto Vallarta" el costo es:$${pv}</p>`;
    }
    if (presupuesto >= 360) {
        imprimir.innerHTML = `<p>El destino podría ser "Acapulco" el costo es:$${aca}</p>`;
    }
    if (presupuesto >= 450) {
        imprimir.innerHTML = `<p>El destino podría ser "Cancún" el costo es:$${can}</p>`;
    }
    if (presupuesto >= 750) {
        imprimir.innerHTML = `<p>El destino podría ser "México" el costo es:$${mx}</p>`;
    }


}