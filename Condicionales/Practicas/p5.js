let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcula);
}

function calcula() {
    let costo = Number(document.getElementById('costo').value);
    let res = 0.0;
    let imprimir = document.getElementById('resultado');

    if (costo > 1000) {
        res = costo * (.20);
        imprimir.innerText = 'El descuento es del 20%, el costo final es de  $' + (costo - res);
    } else {
        imprimir.innerText = 'No aplica descuento';
    }
}