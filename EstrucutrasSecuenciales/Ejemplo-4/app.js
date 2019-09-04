let boton = document.getElementById('boton');
let bot = document.getElementById('bot');
evento();

function evento() {
    boton.addEventListener('click', ObtenerArea);
    bot.addEventListener('click', area);
}

function ObtenerArea() {
    console.time('ObtenerArea');
    const conspi = 3.1415;
    let radio = Number(document.getElementById('radio').value);
    let valor = 0;
    valor = conspi * (radio * radio);
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML = valor;
    console.timeEnd('ObtenerArea');
}
//-----------------------------------------------------


function area() {
    console.time('area');
    let r = Number(document.getElementById('radio').value);
    let val = 0;
    val = Math.PI * Math.pow(r, 2)
    let i = document.getElementById('resultado');
    i.innerHTML = val;
    console.timeEnd('area');
}