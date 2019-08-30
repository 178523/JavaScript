let boton = document.getElementById('boton');
boton.addEventListener('click', costo);

function costo() {
    let metro = document.getElementById('metro').value;
    let costo = document.getElementById('costo').value;
    metro = Number(metro);
    costo = Number(costo);
    let resultado = 0;
    resultado = metro * costo;
    let costototal = document.getElementById('resultado');
    costototal.innerHTML = resultado;


}