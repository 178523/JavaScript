let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcula);
}

function calcula() {
    let articulo = Number(document.getElementById('articulo').value);
    let clave = Number(document.getElementById('clave').value);
    let costo = Number(document.getElementById('costo').value);
    let res = 0.0;
    let imprimir = document.getElementById('resultado');

    if (clave == 01) {
        res = costo * (.10);
        imprimir.innerText = 'El descuento es del 10%, el costo final es de  $' + (costo - res);
    }
    if (clave == 02) {
        res = costo * (.20);
        imprimir.innerText = 'El descuento es del 20%, el costo final es de  $' + (costo - res);
    }
}