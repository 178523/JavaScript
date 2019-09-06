let numero = document.getElementById('numero');
evento();

function evento() {
    numero.addEventListener('keypress', comparar);
}


function comparar(event) {

    if (event.key == "Enter") {
        let imprimir = document.getElementById('resultado');

        if ((Number(numero.value) >= 0) && (Number(numero.value) <= 9)) {
            imprimir.innerHTML = `<p>El número tiene 1 cifra</p>`;
        }
        if ((Number(numero.value) >= 10) && (Number(numero.value) <= 99)) {
            imprimir.innerHTML = `<p>El número tiene 2 cifras</p>`;
        }
        if ((Number(numero.value) >= 100) && (Number(numero.value) <= 999)) {
            imprimir.innerHTML = `<p>El número tiene 3 cifras</p>`;
        }
        if (Number(numero.value) > 999) {
            imprimir.innerHTML = `<p>El número tiene más de 3 cifras</p>`;
        }

    }
}