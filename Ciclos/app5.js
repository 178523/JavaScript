let botonadd = document.getElementById('botonadd');
let botontotal = document.getElementById('botontotal');
let contador = 0;
let contadorprecio = 0;
evento();

function evento() {
    botonadd.addEventListener('click', agregarA);
    botontotal.addEventListener('click', calcularTotal);
}

function agregarA() {
    contador++;
    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');
    DivRow.setAttribute('id', `fila${contador}`);

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');
    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group mb-3');
    let inputArticulo = document.createElement('input');
    inputArticulo.setAttribute('type', 'text');
    inputArticulo.setAttribute('class', 'form-control');
    inputArticulo.setAttribute('placeholder', 'Ingresa el nombre del articulo');

    let inputGroupAppend = document.createElement('div');
    inputGroupAppend.setAttribute('class', 'input-group-append');

    let buttonAddPrecio = document.createElement('button');
    buttonAddPrecio.setAttribute('id', `botonadd${contador}`)
    buttonAddPrecio.setAttribute('class', 'btn btn-outline-secondary');
    buttonAddPrecio.appendChild(document.createTextNode('+'))

    let listaArticulos = document.getElementById('listaArticulos');
    listaArticulos.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(inputGroup);
    inputGroup.appendChild(inputArticulo);
    inputGroup.appendChild(inputGroupAppend);
    inputGroupAppend.appendChild(buttonAddPrecio);

    EventoAgregarPrecio();
}

function EventoAgregarPrecio() {
    let buttonAddPrecio = document.getElementById(`botonadd${contador}`);
    buttonAddPrecio.addEventListener('click', CrearInputPrecio);
}

function CrearInputPrecio(event) {

    contadorprecio++;

    event.target.setAttribute('disabled', true);

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'form-group mb-3');

    let inputPrecioArticulo = document.createElement('input');
    inputPrecioArticulo.setAttribute('type', 'number');
    inputPrecioArticulo.setAttribute('id', `precio${contadorprecio}`);
    inputPrecioArticulo.setAttribute('class', 'form-control');
    inputPrecioArticulo.setAttribute('placeholder', 'Ingresa el costo del articulo');

    let listaArticulos = event.target.parentElement.parentElement.parentElement.parentElement;

    listaArticulos.appendChild(DivCol);
    DivCol.appendChild(inputGroup);
    inputGroup.appendChild(inputPrecioArticulo);

}

function calcularTotal() {
    let imprimir = document.getElementById('resultado');
    let suma = 0;

    for (let i = 1; i <= contadorprecio; i++) {
        let valorinput = Number(document.getElementById(`precio${i}`).value);
        if (valorinput >= 200) {
            suma += valorinput * 0.85;
        } else if (valorinput <= 200 && valorinput >= 100) {
            suma += valorinput * 0.88;
        } else {
            suma += valorinput * 0.90;
        }
    }
    resultado.innerHTML = `<p>La suma es: ${suma}</p>`;
}