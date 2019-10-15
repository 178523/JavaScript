const formulario = document.getElementById('cotizar-seguro');
evento();
llenarSelectAnio();

function evento() {
    formulario.addEventListener('submit', CotizarSeguro);
}

function CotizarSeguro(event) {

    event.preventDefault();
    const marcaSeleccionada = document.getElementById('marca').value; //select
    const anio = document.getElementById('anio').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const interfaz = new Interfaz();

    if (marcaSeleccionada == "" || anio == "" || tipo == "") {
        interfaz.mostrarMensaje('Datos Incompletos', 'error');
    } else {
        const resultado = document.querySelector('#resultado div')
        if (resultado != null) {
            resultado.remove();
        }
        const seguro = new Seguro(marcaSeleccionada, anio, tipo);
        const cantidad = seguro.cotizarSeguro();
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('cotizando...', 'Exito');
    }

}

function llenarSelectAnio() {
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectAnios = document.getElementById('anio');

    for (let i = max; i > min; i--) {
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerHTML = i;
        selectAnios.appendChild(opcion);
    }
}