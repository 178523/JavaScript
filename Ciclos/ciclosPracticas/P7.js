let calcular = document.getElementById('calcular');

evento();

function evento() {
    calcular.addEventListener('click', calcula);
}

function calcula() {
    let numero = Number(document.getElementById('numero').value);

    let numAyuda = 0;

    while (numero > 1) {
        if (numero % 2 == 0) {
            //es par
            numero = numero / 2;
        } else {
            //es impar
            numero = (numero * 3) + 1;
        }
        let AgregaLista = document.createElement('li')
        let textoLista = document.createTextNode(`${numero}`);
        AgregaLista.appendChild(textoLista);
        let imprimir = document.getElementById('lista');
        lista.appendChild(AgregaLista);
    }

}