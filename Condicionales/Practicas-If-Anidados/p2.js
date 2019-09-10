let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcular);
}



function calcular() {
    let auto = document.getElementById('auto').value;
    let persona = Number(document.getElementById('persona').value);
    let imprimir = document.getElementById('resultado');
    let costo = 0;

    if (persona < 20) {
        costo = persona * 20;
        imprimir.innerHTML = `<p>El número de personas es inferior a 20. El costo por persona es de $20 y el costo del viaje es de $${costo} </p>`;
    }
    if ((auto == 'a') && (persona > 20)) {
        costo = persona * 1.5;
        imprimir.innerHTML = `<p>El costo por persona es de $1.5 y el costo del viaje es de $${costo} </p>`;
    }
    if ((auto == 'b') && (persona > 20)) {
        costo = persona * 2;
        imprimir.innerHTML = `<p>El costo por persona es de $2 y el costo del viaje es de $${costo} </p>`;
    }
    if ((auto == 'c') && (persona > 20)) {
        costo = persona * 2.5;
        imprimir.innerHTML = `<p>El costo por persona es de $2.5 y el costo del viaje es de $${costo} </p>`;
    }
    if ((auto == 'd') && (persona > 20)) {
        costo = persona * 3;
        imprimir.innerHTML = `<p>El costo por persona es de $3 y el costo del viaje es de $${costo} </p>`;
    }



}