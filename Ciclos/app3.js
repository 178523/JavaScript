boton = document.getElementById('boton');
botonpro = document.getElementById('botonpro');
let contador = 0;

evento();

function evento() {
    boton.addEventListener('click', agregapersona);
    botonpro.addEventListener('click', calcular);
}

function agregapersona() {
    contador++;

    let Fila_Row = document.createElement('div');
    Fila_Row.setAttribute('class', 'row');

    let Columna_Col = document.createElement('div');
    Columna_Col.setAttribute('class', 'col-12');

    let Form_Group = document.createElement('div');
    Form_Group.setAttribute('class', 'form-group');

    let Label_Form = document.createElement('label');
    let Texto_Label_Form = document.createTextNode(`Ingresa la estatura de la persona ${contador}:`);
    Label_Form.appendChild(Texto_Label_Form);

    let Input_Form = document.createElement('input');
    Input_Form.setAttribute('type', 'number');
    Input_Form.setAttribute('class', 'form-control');
    Input_Form.setAttribute('placeholder', 'cm');
    Input_Form.setAttribute('id', `Persona${contador}`);

    let cajaprincipal = document.getElementById('cajaprincipal');
    cajaprincipal.appendChild(Fila_Row);
    Fila_Row.appendChild(Columna_Col);
    Columna_Col.appendChild(Form_Group);
    Form_Group.appendChild(Label_Form);
    Form_Group.appendChild(Input_Form);

}

function calcular() {
    let imprimir = document.getElementById('resultado');
    let suma = 0;
    let promedio = 0;

    for (let i = 1; i <= contador; i++) {
        let edad = Number(document.getElementById(`Persona${i}`).value);
        suma = suma + edad;
    }
    promedio = suma / contador;
    resultado.innerHTML = `<p> La estatura promedio es ${promedio}</p>`;
}