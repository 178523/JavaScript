let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', promedio);
}



function promedio() {
    let cal1 = Number(document.getElementById('cal1').value);
    let cal2 = Number(document.getElementById('cal2').value);
    let cal3 = Number(document.getElementById('cal3').value);
    let imprimir = document.getElementById('resultado');

    let promedio = 0;
    promedio = (cal1 + cal2 + cal3) / 3;

    if (promedio > 9) {
        imprimir.innerHTML = `<p>APROBADO El promedio es ${promedio} </p>`;
        imprimir.style.background = "";
    }
    if ((promedio > 6) && (promedio < 9)) {
        imprimir.innerHTML = `<p>REGULAR El promedio es ${promedio} </p>`;
        imprimir.style.border = "orange";
    }
    if (promedio < 6) {
        imprimir.innerHTML = `<p>REPROBADO El promedio es ${promedio} </p>`;
        imprimir.style.background = "red";
    }

}