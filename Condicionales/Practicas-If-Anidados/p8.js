let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcular);
}



function calcular() {
    let a1 = Number(document.getElementById('a1').value);
    let a2 = Number(document.getElementById('a2').value);
    let a3 = Number(document.getElementById('a3').value);
    let a4 = Number(document.getElementById('a4').value);
    let imprimir = document.getElementById('resultado');
    let suma = 0;
    let prom = 0;
    suma = a1 + a2 + a3 + a4;

    if ((a1 < a2) && (a1 < a3) && (a1 < a4)) {
        suma = a2 + a3 + a4;
        prom = suma / 3;
        imprimir.innerHTML = `<p>La calificación menor es ${a1}, el promedio es ${prom} </p>`;
    }
    if ((a2 < a1) && (a2 < a3) && (a2 < a4)) {
        suma = a1 + a3 + a4;
        prom = suma / 3;
        imprimir.innerHTML = `<p>La calificación menor es ${a2}, el promedio es ${prom} </p>`;
    }
    if ((a3 < a1) && (a3 < a2) && (a3 < a4)) {
        suma = a2 + a1 + a4;
        prom = suma / 3;
        imprimir.innerHTML = `<p>La calificación menor es ${a3}, el promedio es ${prom} </p>`;
    }
    if ((a4 < a2) && (a4 < a3) && (a4 < a1)) {
        suma = a2 + a3 + a1;
        prom = suma / 3;
        imprimir.innerHTML = `<p>La calificación menor es ${a4}, el promedio es ${prom} </p>`;
    }



}