let btnGenerarElementos = document.getElementById('btnGenerarElementos');
let ArrayPrimeNumber = [];
evento();

function evento() {
    btnGenerarElementos.addEventListener('click', GenerarElementos);
}

function GenerarElementos() {
    let inputValue = Number(document.getElementById('longitud').value);


    console.time('Inicio ForFUerzaBruta');

    for (let x = 0; x < inputValue; x++) {

        let numberPrimeRandom = IsPrime();
        if (numberPrimeRandom === null) {
            x--;
        } else {
            ArrayPrimeNumber[x] = numberPrimeRandom;
        }

    }
    console.timeEnd('Inicio ForFUerzaBruta');
    console.log(ArrayPrimeNumber);
    MostrarElementos();

    let max = 0;

    for (let x = 0; x <= ArrayPrimeNumber.length; x++) {
        if (max < ArrayPrimeNumber[x]) {
            max = ArrayPrimeNumber[x];
        }
    }
    console.log(max);
    let resultados = `<p>El mayor es ${max}</p>`
    document.getElementById('resultado').innerHTML = resultados;


}

function IsPrime() {
    let NumberRandom = Math.floor(Math.random() * 1000) + 1;
    for (let i = 2; i < NumberRandom; i++) {
        if (NumberRandom % i == 0) {
            return null;
        }
    }
    return NumberRandom;
}

function MostrarElementos() {
    let informacionImprimir = "";
    for (let i = 0; i < ArrayPrimeNumber.length; i++) {
        informacionImprimir += `<li class="list-group-item">Elemento ${i+1} --> ${ArrayPrimeNumber[i]}</li>`

    }
    document.getElementById('listaImprimir').innerHTML = informacionImprimir;
}

function FillArrayDynamic() {
    let PrimeNUmber = 0;
    for (let i = 0; i < PrimeNUmber; i++) {
        PrimeNUmber++;
        if (PrimeNUmber % i == 0) {
            ArrayPrimeNumber[i] = PrimeNUmber;

        }

    }

}