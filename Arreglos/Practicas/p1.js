let generaValores = document.getElementById('generaValores');
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multiplica = document.getElementById('multiplica');

let array1 = [];
let array2 = [];
let array3 = [];

let capacidad = 0;



evento();

function evento() {
    generaValores.addEventListener('click', aleatorio);
    suma.addEventListener('click', Fsuma);
    resta.addEventListener('click', Fresta);
    multiplica.addEventListener('click', Fmultiplica);
}


function aleatorio() {
    let NumberRandom = 0;
    let longitud = Number(document.getElementById('longitud').value);
    capacidad = longitud;
    for (let i = 0; i < longitud; i++) {
        NumberRandom = Math.floor(Math.random() * 200) - 1;
        array1[i] = NumberRandom - 100;
        NumberRandom = Math.floor(Math.random() * 200) - 1;
        array2[i] = NumberRandom - 100;
    }
    MostrarElementos(array1, 1);
    MostrarElementos(array2, 2);


}

function Fsuma() {
    for (let i = 0; i < capacidad; i++) {
        array3[i] = array1[i] + array2[i];
    }
    MostrarElementos(array3, 3);
}

function Fresta() {
    for (let i = 0; i < capacidad; i++) {
        array3[i] = array1[i] - array2[i];
    }
    MostrarElementos(array3, 3);
}

function Fmultiplica() {
    for (let i = 0; i < capacidad; i++) {
        array3[i] = array1[i] * array2[i];
    }
    MostrarElementos(array3, 3);
}

function MostrarElementos(Array, a) {
    let informacionImprimir = "";
    for (let i = 0; i < Array.length; i++) {
        informacionImprimir += `<li class="list-group-item">${Array[i]}</li>`

    }
    document.getElementById(`ArrayList${a}`).innerHTML = informacionImprimir;
}