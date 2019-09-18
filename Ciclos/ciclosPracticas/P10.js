let calcular = document.getElementById('calcular');
let can1 = document.getElementById('can1');
let can2 = document.getElementById('can2');
let can3 = document.getElementById('can3');
let can4 = document.getElementById('can4');
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;

evento();

function evento() {
    calcular.addEventListener('click', calcula);
    can1.addEventListener('click', candidato1);
    can2.addEventListener('click', candidato2);
    can3.addEventListener('click', candidato3);
    can4.addEventListener('click', candidato4);
}

function candidato1() {
    c1++;
    let r1 = document.getElementById('r1');
    r1.innerHTML = `${c1}`;
}

function candidato2() {
    c2++;
    let r2 = document.getElementById('r2');
    r2.innerHTML = `${c2}`;
}

function candidato3() {
    c3++;
    let r3 = document.getElementById('r3');
    r3.innerHTML = `${c3}`;
}

function candidato4() {
    c4++;
    let r4 = document.getElementById('r4');
    r4.innerHTML = `${c4}`;
}

function calcula() {
    let votos = 0;
    let p1 = 0,
        p2 = 0,
        p3 = 0,
        p4 = 0;
    votos = c1 + c2 + c3 + c4;
    p1 = (c1 * 100) / votos;
    p2 = (c2 * 100) / votos;
    p3 = (c3 * 100) / votos;
    p4 = (c4 * 100) / votos;
    let imprimir = document.getElementById('resultado');

    imprimir.innerHTML = `El total de votantes son ${votos}<br> El candidato #1 recibio el %${p1}<br> 
    El candidato #2 recibio el %${p2}
    <br> El candidato #3 recibio el %${p3}<br> 
    El candidato #4 recibio el %${p4}`;


}