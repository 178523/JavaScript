let btnGenerarElementos = document.getElementById('btnGenerarElementos');
let elementos = [];
evento();

function evento() {
    btnGenerarElementos.addEventListener('click', GenerarElementos);
}

function aleatorio() {
    let num = Math.floor(Math.random() * 9) + 0;
    return num;
}

function GenerarElementos() {
    let longitud = Number(document.getElementById('longitud').value);
    let i = 0;
    let acumulador = 0;

    for (i = 0; i < longitud; i++) {

        elementos[i] = aleatorio();
        acumulador += elementos[i];
        console.log(acumulador);

    }
    MostrarElementos(acumulador);
    suma = 0;

}

function MostrarElementos(acumulador) {
    let informacionImprimir = "";
    console.log(acumulador);
    for (let i = 0; i < elementos.length; i++) {
        informacionImprimir += `<li class="list-group-item">Elemento ${i+1} --> ${elementos[i]}</li>`

    }
    document.getElementById('listaImprimir').innerHTML = informacionImprimir;


    let resultados = `<p>El total de lementos generados son ${elementos.length}.<br>La suma de los elementos es ${acumulador}</p>`
    document.getElementById('resultado').innerHTML = resultados;


}