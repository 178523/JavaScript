boton = document.getElementById('boton');
botonpro = document.getElementById('botonpro');
let numeroInput = 0;

evento();

function evento() {
    boton.addEventListener('click', agrega);
    botonpro.addEventListener('click', promedio);
}

function agrega() {

    numeroInput++;
    let DivRow = document.createElement('div');
    DivRow.setAttribute("class", `row`);

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let FormG = document.createElement('div');
    FormG.setAttribute('class', 'form-group');

    let label = document.createElement('label');
    let textlabl = document.createTextNode(`Ingresa la edad del alumno ${numeroInput}:`);
    label.appendChild(textlabl);

    let input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', '');

    input.setAttribute('id', `alumno${numeroInput}`);


    let cajaalumnos = document.getElementById('cajaalumnos');
    cajaalumnos.appendChild(DivRow);

    DivRow.appendChild(DivCol);
    DivCol.appendChild(FormG);
    FormG.appendChild(label);
    FormG.appendChild(input);

}

function promedio() {
    let imprimir = document.getElementById('resultado');
    let suma = 0;
    let promedio = 0;

    for (let i = 1; i <= numeroInput; i++) {
        let edad = Number(document.getElementById(`alumno${i}`).value);
        suma = suma + edad;
    }
    promedio = suma / numeroInput;
    resultado.innerHTML = `<p> El promedio es ${promedio}</p>`;

}