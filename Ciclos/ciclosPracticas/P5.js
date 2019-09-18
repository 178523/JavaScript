let agregar = document.getElementById('agregar');
let calcular = document.getElementById('calcular');
let contador = 0;
evento();

function evento() {
    agregar.addEventListener('click', agregaventa);
    calcular.addEventListener('click', calcula);
}

function agregaventa() {
    contador++;

    let Fila_Row = document.createElement('div');
    Fila_Row.setAttribute('class', 'row');

    let Columna_Col = document.createElement('div');
    Columna_Col.setAttribute('class', 'col-12');

    let Form_Group = document.createElement('div');
    Form_Group.setAttribute('class', 'form-group');

    let Label_Form = document.createElement('label');
    let Texto_Label_Form = document.createTextNode(`Ingrese la venta ${contador}:`);
    Label_Form.appendChild(Texto_Label_Form);

    let Input_Form = document.createElement('input');
    Input_Form.setAttribute('type', 'number');
    Input_Form.setAttribute('class', 'form-control');
    Input_Form.setAttribute('placeholder', 'Venta');
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
    let a = 0;
    let aTotal = 0;
    let b = 0;
    let bTotal = 0;
    let c = 0;
    let cTotal = 0;
    let Total = 0;

    for (let i = 1; i <= contador; i++) {
        let cantidad = Number(document.getElementById(`Persona${i}`).value);
        if (cantidad > 1000) {
            a++;
            aTotal = aTotal + cantidad;
        }
        if (cantidad > 500 && cantidad <= 1000) {
            b++;
            bTotal = bTotal + cantidad;
        }
        if (cantidad <= 500) {
            c++;
            cTotal = cTotal + cantidad;
        }


    }
    Total = Total + aTotal + bTotal + cTotal;
    resultado.innerHTML = `<p> Las ventas mayores a $1000 son ${a} con un neto de $${aTotal}. Las ventas mayores a $500 y menor o igual a $1000 son ${b} con un neto de $${bTotal}. Las ventas menores a $500 son ${c} con un neto de $${cTotal}. Las ventas totales fueron de $${Total}</p>`;
}