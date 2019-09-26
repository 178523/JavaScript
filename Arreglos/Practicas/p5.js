let btnGenerarElementos = document.getElementById('btnGenerarElementos');
let CalculateArray = document.getElementById('CalculateArray');
let ArrayPrimeNumber = [];
let arrayorden = [];
let a = 0;
evento();

function evento() {
    btnGenerarElementos.addEventListener('click', IsPrime);
    CalculateArray.addEventListener('click', Ordenar);
}



function IsPrime() {

    for (let n = 2; n < 1000; n++) {
        let primo = 1;
        let contador = 2;

        while (contador <= n / 2 && primo) {
            if (n % contador == 0) {
                primo = 0;
            }
            contador++;

        }

        if (primo) {
            ArrayPrimeNumber[a] = n;
            a++;
        }
    }
    MostrarElementos(ArrayPrimeNumber, 1);
    console.log(ArrayPrimeNumber);
}


function Ordenar() {


    let cont = 0;
    for (let i = a - 1; i > 0; i--) {
        arrayorden[cont] = ArrayPrimeNumber[i];
        cont++;
    }
    MostrarElementos(arrayorden, 2);

    console.log(arrayorden);

}

function MostrarElementos(vector, a) {
    let informacionImprimir = "";
    for (let i = 0; i < vector.length; i++) {
        informacionImprimir += `<li class="list-group-item">Elemento ${i+1} --> ${vector[i]}</li>`

    }
    document.getElementById(`ArrayList${a}`).innerHTML = informacionImprimir;
}