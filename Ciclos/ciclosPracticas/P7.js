let InputNumbers = document.getElementById('InputNumbers');
ArrayLetter = [];
let PrintString = "";
evento();


function evento() {
    InputNumbers.addEventListener('change', GetLetter);
}

fillArray();


function GetLetter(event) {
    console.log(event);
    let value = Number(InputNumbers.value);

    if (value > 0 && value < 26) {
        PrintString += `<li class="list-group-item">${ArrayLetter[value]}</li>`;
        document.getElementById("AlertPrint").innerHTML = PrintString;
    } else {
        swal.fire({
            type: 'error',
            title: 'Limite de rango',
            text: 'Favor de ingresar números entre 0 y 25'
        })
    }
    InputNumbers.vale = "";
}

function fillArray() {
    for (let i = 0; i < 25; i++) {
        ArrayLetter[i] = String.fromCharCode(i + 65);
    }
}