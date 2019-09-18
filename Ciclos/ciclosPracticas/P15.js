let calcular = document.getElementById('calcular');

evento();

function evento() {
    calcular.addEventListener('click', perfectos);
}

function perfectos() {


    let aumento = 0.10;
    let total = 1500;


    for (let i = 1; i <= 6; i++) {
        total = total + (total * aumento);

        let AgregarLista = document.createElement('li');
        let textoLista = document.createTextNode(`${total}`);
        AgregarLista.appendChild(textoLista);
        let imprimir = document.getElementById('lista');
        lista.appendChild(AgregarLista);

    }
}