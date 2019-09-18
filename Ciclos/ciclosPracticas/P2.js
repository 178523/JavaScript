let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', calcula);
}

function calcula() {


    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {

            let AgregaLista = document.createElement('li')
            let textoLista = document.createTextNode(`${i}`);
            AgregaLista.appendChild(textoLista);

            let imprimir = document.getElementById('lista');

            lista.appendChild(AgregaLista);


        }
    }
}