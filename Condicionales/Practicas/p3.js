let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', calcula);
}

function calcula() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    let res = 0;
    let imprimir = document.getElementById('resultado');

    if (a == b && b == c) {
        imprimir.innerText = 'Equilatero';
    }
    if ((a == b && c != b) || (c == b && a != b) || (a == c && a != b)) {
        imprimir.innerText = 'Isóceles';
    }
    if (a != b && a != c && b != c) {
        imprimir.innerText = 'Escaleno';
    }
}