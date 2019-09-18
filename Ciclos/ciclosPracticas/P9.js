let calcular = document.getElementById('calcular');

evento();

function evento() {
    calcular.addEventListener('click', calcula);
}

function calcula() {
    let n = Number(document.getElementById('numero').value);


    let contador = 0;
    contador = n - 2;
    let n1 = 0;
    let n2 = 1;

    let AgregaLista = document.createElement('li')
    let textoLista = document.createTextNode(`0`);
    AgregaLista.appendChild(textoLista);
    let imprimir = document.getElementById('lista');
    lista.appendChild(AgregaLista);

    let AgregaLista1 = document.createElement('li')
    let textoLista1 = document.createTextNode(`1`);
    AgregaLista1.appendChild(textoLista1);
    let imprimir1 = document.getElementById('lista');
    lista.appendChild(AgregaLista1);

    for (let i = 0; i < contador; i++) {
        n2 = n1 + n2;
        n1 = n2 - n1;

        if (n2 <= n) {
            let AgregaLista = document.createElement('li')
            let textoLista = document.createTextNode(`${n2}`);
            AgregaLista.appendChild(textoLista);
            let imprimir = document.getElementById('lista');
            lista.appendChild(AgregaLista);
        }

    }



}