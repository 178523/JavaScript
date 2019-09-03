let boton = document.getElementById('boton');
evento();

function evento() {
    boton.addEventListener('click', hip);
}

function hip() {
    let altura = Number(document.getElementById('altura').value);
    let base = Number(document.getElementById('base').value);

    let total = 0;
    total = Math.sqrt((altura * altura) + (base * base));
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = total;
}