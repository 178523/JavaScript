let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', calcula);
}

function calcula() {
    let imprimir = document.getElementById('resultado');
    let suma = 0;
    let total = 0;
    for (let i = 1; i <= 6; i++) {
        let dia = Number(document.getElementById(`dia${i}`).value);
        suma = suma + dia;
    }
    let sueldo = Number(document.getElementById('sueldo').value);
    total = sueldo * suma;
    resultado.innerHTML = `<p>Las horas trabajadas son ${suma} El sueldo es ${total} </p>`;
}