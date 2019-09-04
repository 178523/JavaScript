let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', area);
}

function area() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    let area = 0;
    let p = 0;
    p = (a + b + c) / 2;
    area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = area;
}