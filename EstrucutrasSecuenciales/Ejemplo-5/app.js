let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click',
        areaTotal);
}

function areaTotal() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    let cuadrilatero = 0;
    cuadrilatero = b * c;
    let h = 0;
    h = a - c;
    let triangulo = 0;
    triangulo = (b * h) / 2;
    let total = 0;
    total = cuadrilatero + triangulo;
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = total;

}