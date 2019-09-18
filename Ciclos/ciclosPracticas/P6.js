let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', calcula);
}

function calcula() {
    let pagar = 5;
    let suma = 0;

    for (let i = 0; i < 20; i++) {


        pagar = pagar * 2;
        suma = suma + pagar;

        let AgregaLista = document.createElement('li')
        let textoLista = document.createTextNode(`Mes ${i+1} $${pagar}`);
        AgregaLista.appendChild(textoLista);

        let imprimir = document.getElementById('lista');

        lista.appendChild(AgregaLista);
    }
    let mostrarTotal = document.getElementById('resultado');
    mostrarTotal.innerHTML = `El total a pagar es $${suma}`;
}