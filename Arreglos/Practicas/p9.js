let contar = document.getElementById('contar');
let elementos = document.getElementById('elementos');

let counterClicksAddElements = 0;
let correctas = 0;

evento();

function evento() {
    contar.addEventListener('click', calculate);
    elementos.addEventListener('click', cuentaLetras);
}




function cuentaLetras() {

    let longitud = Number(document.getElementById('longitud').value);

    for (let i = 0; i < longitud; i++) {
        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item mb-2');

        let input = document.createElement('input');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `ListArray${counterClicksAddElements}`);
        input.setAttribute('placeholder', `Nombre ${counterClicksAddElements+1}`);

        document.getElementById('ArrayList1').appendChild(li);
        li.appendChild(input);

        counterClicksAddElements++;
    }



}

function calculate() {

    let Arrayuno = [];
    let ArrayDos = [];
    let cont = 0;
    for (let i = 0; i < counterClicksAddElements; i++) {
        Arrayuno[i] = document.getElementById(`ListArray${i}`).value;
    }

    for (let i = counterClicksAddElements; i >= 0; i--) {
        ArrayDos[cont] = Arrayuno[i];
        cont++;
    }

    MostrarElementos(ArrayDos);

}

function MostrarElementos(ArrayDos) {
    let informacionImprimir = "";
    for (let i = 1; i <= counterClicksAddElements; i++) {
        informacionImprimir += `<li class="list-group-item mb-3">${ArrayDos[i]}</li>`

    }
    document.getElementById('listaImprimir').innerHTML = informacionImprimir;
}