let InputNumbers = document.getElementById('InputNumbers');
let PrintString = "";
let arreglo = [];
evento();

function evento() {
    InputNumbers.addEventListener('change', TomaCadena);
}

function TomaCadena(event) {

    let value = InputNumbers.value;

    for (let i = 0; i < value.length; i++) {
        // arreglo[i] = value.charAt(i);
        arreglo[i] = value.charCodeAt(i) + 3;
        arreglo[i] = String.fromCharCode(arreglo[i]);
        PrintString += `<li class="list-group-item">${arreglo[i]}</li>`;
        document.getElementById("AlertPrint").innerHTML = PrintString;

    }
}