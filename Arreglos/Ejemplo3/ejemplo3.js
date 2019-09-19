let btnAgregarElementos = document.getElementById('btnAgregarElementos');
let elementos = [];
evento();

function evento() {
    btnAgregarElementos.addEventListener('click', AgregarElementos);
}

function AgregarElementos() {
    let valorInput = Number(document.getElementById('AgregarElemento').value);
    let i = 0;

    for (i = 0; i < elementos.length; i++) {

        if (valorInput === elementos[i]) {
            let resultado = `<li class="list-group-item">El número ${valorInput} ya fue ingresado. Ingrese un número diferente.</li>`
            document.getElementById('resultado').innerHTML = resultado;
            return;
        }
    }
    elementos[i] = valorInput;
    valorInput.value = "";
    MostrarElementos();

}

function MostrarElementos() {
    let informacionImprimir = "";
    for (let i = 0; i < elementos.length; i++) {
        informacionImprimir += `<li class="list-group-item">${elementos[i]}</li>`

    }
    document.getElementById('listaImprimir').innerHTML = informacionImprimir;
}