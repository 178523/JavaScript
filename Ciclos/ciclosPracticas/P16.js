let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', calcula);
}

function calcula() {
    let pagar = 0.01;
    let suma = 0;

    for (let i = 1; i <= 365; i++) {


        pagar = pagar * 3;
        suma = suma + pagar;

        let AgregaLista = document.createElement('li')
        let textoLista = document.createTextNode(`Día ${i} $${pagar}`);
        AgregaLista.appendChild(textoLista);

        let imprimir = document.getElementById('lista');

        lista.appendChild(AgregaLista);
    }
    let mostrarTotal = document.getElementById('resultado');
    mostrarTotal.innerHTML = `EL ahorro en un año es de$${suma}`;
}