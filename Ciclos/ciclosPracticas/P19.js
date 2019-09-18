let calcular = document.getElementById('calcular');

evento();

function evento() {
    calcular.addEventListener('click', perfectos);
}

function perfectos() {


    let contador = 0,
        serie = 2,
        suma = 0,
        sumaextra = 0;


    while (suma < 1800) {
        contador++;
        if (contador % 2 == 0) {
            //par
            serie = serie + 2;
        } else {
            //impar
            serie = serie + 3;
        }
        suma = serie + suma;
        if (suma < 1800) {
            sumaextra = suma - serie;
            let AgregarLista = document.createElement('li');
            let textoLista = document.createTextNode(`${serie}`);
            AgregarLista.appendChild(textoLista);
            let imprimir = document.getElementById('lista');
            lista.appendChild(AgregarLista);
        }

    }
    console.log(sumaextra);


}