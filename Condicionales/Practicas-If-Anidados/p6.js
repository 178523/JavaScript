let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcular);
}



function calcular() {
    let presupuesto = Number(document.getElementById('presupuesto').value);
    let a1 = Number(document.getElementById('a1').value);
    let a2 = Number(document.getElementById('a2').value);
    let a3 = Number(document.getElementById('a3').value);
    let a4 = Number(document.getElementById('a4').value);
    let imprimir = document.getElementById('resultado');
    let suma = 0;
    suma = a1 + a2 + a3 + a4;


    if (suma <= presupuesto) {
        imprimir.innerHTML = `<p>Presupuesto correcto. Sobran $ ${presupuesto-suma} </p>`;
    }
    if (suma > presupuesto) {
        imprimir.innerHTML = `<p>Fuera del presupuesto. faltan $ ${suma-presupuesto} </p>`;
    }


}