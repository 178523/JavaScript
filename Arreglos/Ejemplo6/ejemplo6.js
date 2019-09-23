let btnAddElements = document.getElementById('btnAddElements');
let CalculateArray = document.getElementById('CalculateArray');

let counterClicksAddElements = 0;
evento();

function evento() {
    btnAddElements.addEventListener('click', add);
    CalculateArray.addEventListener('click', calculate);
}




function add() {
    // for (let i = 0; i < counterClicksAddElements; i++) {
    //     let Arrayuno = Number(document.getElementById(`ListArrayR${i}`).value);
    //     let Arraydos = Number(document.getElementById(`ListArrayL${i}`).value);

    //     if (Arrayuno > 0 && Arraydos > 0) {
    //         calculate();
    //     }
    // }


    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item mb-2');

    let input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', `ListArrayR${counterClicksAddElements}`);
    input.setAttribute('placeholder', `Numero ${counterClicksAddElements+1}`);

    document.getElementById('ArrayList1').appendChild(li);
    li.appendChild(input);


    //********************************* */
    let li2 = document.createElement('li');
    li2.setAttribute('class', 'list-group-item mb-2');

    let input2 = document.createElement('input');
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('id', `ListArrayL${counterClicksAddElements}`);
    input2.setAttribute('placeholder', `Numero ${counterClicksAddElements+1}`);

    document.getElementById('ArrayList2').appendChild(li2);
    li2.appendChild(input2);

    counterClicksAddElements++;



}

function calculate() {

    let tres = [];

    for (let i = 0; i < counterClicksAddElements; i++) {
        let Arrayuno = Number(document.getElementById(`ListArrayR${i}`).value);
        let Arraydos = Number(document.getElementById(`ListArrayL${i}`).value);
        tres[i] = Arrayuno + Arraydos;

        if (isNaN(Arrayuno) || isNaN(Arraydos)) {
            Swal.fire({
                type: 'error',
                title: 'Dato incorrecto',
                text: 'Ingresaste algún caracter'
            })
        }
    }
    MostrarElementos(tres);

}

function MostrarElementos(tres) {
    let informacionImprimir = "";
    for (let i = 0; i < counterClicksAddElements; i++) {
        informacionImprimir += `<li class="list-group-item mb-3">${tres[i]}</li>`

    }
    document.getElementById('ArrayList3').innerHTML = informacionImprimir;
}