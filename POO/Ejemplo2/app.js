document.getElementById('casilla').style.display = 'none';

let fin = document.getElementById('fin');
let aceptar = document.getElementById('aceptar');
let salir = document.getElementById('salir');



let favor = document.getElementById('favor');
let contra = document.getElementById('contra');
let abs = document.getElementById('abs');

let Votos = new votos();


evento();


function evento() {
    fin.addEventListener('click', Finalizar);
    aceptar.addEventListener('click', Acepta);
    salir.addEventListener('click', Salir);

    favor.addEventListener('click', Finalizar);
    contra.addEventListener('click', Finalizar);
    abs.addEventListener('click', Finalizar);
}



function Finalizar(e) {

    // console.log(e.target);
    if (e.target.id == "favor") {
        Votos.ContarFavor();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Voto a Favor'
        })
    }
    if (e.target.id == "contra") {
        Votos.ContarEnContra();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Voto en Contra'
        })
    }
    if (e.target.id == "abs") {
        Votos.ContarAbstencion();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Voto Nulo'
        })
    }
    if (e.target.id == "fin") {

        if (Votos.favor > 0 || Votos.contra > 0 || Votos.votosAbstencion > 0) {
            Swal.fire({
                title: `Votos a Favor ${Votos.favor}<br> Votos en contra ${Votos.contra} <br> Votos Nulos ${Votos.votosAbstencion} `,
                animation: false,
                customClass: {
                    popup: 'animated tada'
                }
            });
        } else {
            Swal.fire({
                title: `No se han registrado votos`,
                animation: false,
                customClass: {
                    popup: 'animated tada'
                }
            });
        }
        Votos.favor = 0;
        Votos.contra = 0;
        Votos.votosAbstencion = 0;

        document.getElementById('casilla').style.display = 'none';
        document.getElementById('votacion').style.display = 'block';
    }

    //segunda pantalla

}

function Acepta() {
    //primer pantalla
    let texto = document.getElementById('texto').value;
    document.getElementById('respuesta').innerHTML = texto;
    document.getElementById('casilla').style.display = 'block';
    document.getElementById('votacion').style.display = 'none';

}

function ocultar() {

}

function Salir() {
    document.getElementById('casilla').style.display = 'none';
    document.getElementById('votacion').style.display = 'none';
}