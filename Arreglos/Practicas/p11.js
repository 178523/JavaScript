let generaValores = document.getElementById('generaValores');
let pares = document.getElementById('pares');
let buscar = document.getElementById('buscar');

let array1 = [];

let capacidad = 0;



evento();

function evento() {
    generaValores.addEventListener('click', aleatorio);
    pares.addEventListener('click', busqueda);
}


function aleatorio() {
    let NumberRandom = 0;
    let longitud = Number(document.getElementById('longitud').value);
    capacidad = longitud;
    for (let i = 0; i < longitud; i++) {
        NumberRandom = Math.floor(Math.random() * 100) + 1;
        array1[i] = NumberRandom;
    }
    let k = 0;

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1.length - 1; j++) {
            if (array1[j] > array1[j + 1]) {
                k = array1[j + 1];
                array1[j + 1] = array1[j];
                array1[j] = k;
            }
        }
    }
    MostrarElementos(array1, 1);


}



function busqueda() {
    let value = Number(document.getElementById('buscar').value);


    let first = 0; //left endpoint
    let last = array1.length; //right endpoint
    let position = -1;
    let found = false;
    let middle = 0;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (array1[middle] == value) {
            found = true;
            position = middle;
        } else if (array1[middle] > value) { //if in lower half
            last = middle - 1;
        } else { //in in upper half
            first = middle + 1;
        }
    }
    let ConcatenarResultado = "";
    if (position == -1) {
        ConcatenarResultado = `<p>Elemento no encontrado</p>`;

        document.getElementById('listaImprimir').innerHTML = ConcatenarResultado;
    } else {
        ConcatenarResultado = `<p>El elemento esta en la posición ${position+1}</p>`;

        document.getElementById('listaImprimir').innerHTML = ConcatenarResultado;
    }





}

function MostrarElementos(Array, a) {
    let informacionImprimir = "";
    for (let i = 0; i < Array.length; i++) {
        informacionImprimir += `<li class="list-group-item">${Array[i]}</li>`

    }
    document.getElementById(`ArrayList${a}`).innerHTML = informacionImprimir;
}