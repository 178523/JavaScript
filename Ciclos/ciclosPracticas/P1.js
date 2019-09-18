let agregar = document.getElementById('agregar');
let calcular = document.getElementById('calcular');
let contador = 0;
evento();

function evento() {
    agregar.addEventListener('click', agregapersona);
    calcular.addEventListener('click', calcula);
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
    let Texto_Label_Form = document.createTextNode(`Ingrese la cantidad ${contador}:`);
    Label_Form.appendChild(Texto_Label_Form);

    let Input_Form = document.createElement('input');
    Input_Form.setAttribute('type', 'number');
    Input_Form.setAttribute('class', 'form-control');
    Input_Form.setAttribute('placeholder', 'Número');
    Input_Form.setAttribute('id', `Persona${contador}`);

    let cajaprincipal = document.getElementById('cajaprincipal');
    cajaprincipal.appendChild(Fila_Row);
    Fila_Row.appendChild(Columna_Col);
    Columna_Col.appendChild(Form_Group);
    Form_Group.appendChild(Label_Form);
    Form_Group.appendChild(Input_Form);

}

function calcula() {
    let imprimir = document.getElementById('resultado');
    let menor = 0;
    let mayor = 0;

    for (let i = 1; i <= contador; i++) {
        let cantidad = Number(document.getElementById(`Persona${i}`).value);
        if (cantidad < 0) {
            menor++;
        }
        if (cantidad > 0) {
            mayor++;
        }
    }
    resultado.innerHTML = `<p> ${menor} son menores a "0" y ${mayor} son mayores a "0".</p>`;
}