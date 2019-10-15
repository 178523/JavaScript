class Interfaz {
    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');

        if (tipo == 'error') {
            div.classList.add('mensaje', 'error'); // classList --> agrega muchas clases a un elemento
        } else {
            div.classList.add('mensaje', 'correcto');
        }

        div.innerHTML = `${mensaje}`;

        formulario.insertBefore(div, document.querySelector('.form-group')); //Se inserta div antes del primer formgroup
        setTimeout(function() { //funcion asincrona -> No detiene otras funciones cuando se ejecuta
                document.querySelector('.mensaje').remove();

            } //se ejecuta a partir de cuanto?
            , 3000)
    }

    mostrarResultado(seguro, total) {
        const resultado = document.getElementById('resultado');
        let marca;
        switch (seguro.marca) {
            case '1':
                marca = 'Americana';
                break;
            case '2':
                marca = 'Asiatico';
                break;
            case '3':
                marca = 'Europeo';
                break;

        }
        const div = document.createElement('div');

        div.innerHTML = `
        <p class="header">Cotización:</p>
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total: ${total}</p>
        `

        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';

        setTimeout(function() {
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 3000);

    }
}