let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcula);
}

function calcula() {
    let bebe = (document.getElementById('bebe').value);
    let lente = (document.getElementById('lente').value);
    let edad = Number(document.getElementById('edad').value);
    let enfer = (document.getElementById('enfer').value);
    let imprimir = document.getElementById('resultado');
    let costoa = 1200;
    let costob = 950;
    let fin = 0;
    let total = 0;

    //cobertura Amplia

    if ((bebe == 'si') && (lente == 'si') && (enfer == 'si') && (edad > 40)) {
        costoa = costoa + (costoa * .40);
        costob = costob + (costob * .40);
    }
    if ((bebe == 'no') && (lente == 'si') && (enfer == 'si') && (edad > 40)) {
        costoa = costoa + (costoa * .30);
        costob = costob + (costob * .30);
    }
    if ((bebe == 'no') && (lente == 'no') && (enfer == 'si') && (edad > 40)) {
        costoa = costoa + (costoa * .25);
        costob = costob + (costob * .25);
    }
    if ((bebe == 'no') && (lente == 'no') && (enfer == 'no') && (edad > 40)) {
        costoa = costoa + (costoa * .20);
        costob = costob + (costob * .20);
    }
    if ((bebe == 'si') && (lente == 'si') && (enfer == 'si') && (edad < 40)) {
        costoa = costoa + (costoa * .30);
        costob = costob + (costob * .30);
    }
    if ((bebe == 'no') && (lente == 'si') && (enfer == 'si') && (edad < 40)) {
        costoa = costoa + (costoa * .20);
        costob = costob + (costob * .20);
    }
    if ((bebe == 'no') && (lente == 'no') && (enfer == 'si') && (edad < 40)) {
        costoa = costoa + (costoa * .15);
        costob = costob + (costob * .15);
    }
    if ((bebe == 'no') && (lente == 'no') && (enfer == 'no') && (edad < 40)) {
        costoa = costoa + (costoa * .10);
        costob = costob + (costob * .10);
    }


    imprimir.innerHTML = `<p>Cobertura Amplia $${costoa} Daños a terceros $${costob}</p>`;

}