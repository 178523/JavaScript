let btnGenerarElementos = document.getElementById('btnGenerarElementos');
let ArrayM = [];
evento();

function evento() {
    btnGenerarElementos.addEventListener('click', GenerarElementos);
}

function GenerarElementos() {
    let inputValue = Number(document.getElementById('longitud').value);
    let multiplo = Number(document.getElementById('multiplo').value);



    for (let x = 0; x < inputValue; x++) {

        ArrayM[x] = multiplo * (x + 1);

    }
    MostrarElementos();
}



function MostrarElementos() {
    let informacionImprimir = "";
    for (let i = 0; i < ArrayM.length; i++) {
        informacionImprimir += `<li class="list-group-item">Elemento ${i+1} --> ${ArrayM[i]}</li>`

    }
    document.getElementById('listaImprimir').innerHTML = informacionImprimir;
}