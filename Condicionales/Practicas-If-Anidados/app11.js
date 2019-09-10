let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', edades);
}

function edades() {

    let H1 = Number(document.getElementById('hermano1').value);
    let H2 = Number(document.getElementById('hermano2').value);

    let imprimirResultado = document.getElementById('resultado');

    if (H1 > H2) {
        let dif = 0;
        dif = H1 - H2;
        imprimirResultado.innerHTML = `<p> La edad del hermano mayor es: ${H1} . La diferencia de edad es ${dif} años.</p>`;
    } else {
        let dif = 0;
        dif = H2 - H1;
        imprimirResultado.innerHTML = `<p> La edad del hermano mayor es: ${H2} . La diferencia de edad es ${dif} años.</p>`;
    }
    if (H1 == H2) {
        imprimirResultado.innerText = 'LAS EDADES DE LOS HERMANOS SON IGUALES';
    }
}