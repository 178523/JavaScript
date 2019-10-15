event();

let arrayPositionPrize = [];

function event() {
    document.getElementById('contenedor').addEventListener('mousemove', setPrize);

}



function setPrize(event) {
    let palabra = document.getElementById('palabra');
    if (((event.clientX > 713) && (event.clientX < 725)) && ((event.clientY > 43) && (event.clientY < 71))) {
        palabra.innerHTML = `Oreja`;
    } else {
        palabra.innerText = '';
    }
    console.log(event.clientX, event.clientY)

}