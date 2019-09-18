let calcular = document.getElementById('calcular');

evento();

function evento() {
    calcular.addEventListener('click', perfectos);
}

function perfectos() {

    let numero = Number(document.getElementById('numero').value);


    let auxEntero = 0;
    let rangoBusqueda = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            for (let j = (i / 2); j >= 1; j--) {
                if (i % j == 0) {
                    auxEntero = auxEntero + j;
                }
            }
            if (auxEntero == i) {
                let AgregarLista = document.createElement('li');
                let textoLista = document.createTextNode(`${auxEntero}`);
                AgregarLista.appendChild(textoLista);
                let imprimir = document.getElementById('lista');
                lista.appendChild(AgregarLista);
            }
            auxEntero = 0;
        }

    }
}