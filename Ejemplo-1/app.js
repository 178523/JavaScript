//Esta línea crea una variable la cuál se encarga de obterner por medio del objeto document el elemento button con el id btnCalcular
let btnCalcular = document.getElementById('btnCalcular');

//Por medio del método "addEventListener" se le asigno el momento clic al elemento button y al momento de ejecutar dicho evento se ejecutará la función suma
btnCalcular.addEventListener('click', suma);

//Funcion bloque de código que se ejecuta hasta cuando se manda a llamar o se invoca, mientras no sea invocada no realizará ninguna accion en el código.
function suma() {
    //Se obtendrá los valores de los inputs por medio del método "value"
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    //Se reasigna el valor de las variables conviertiendolo de string a int
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    //Se declara variable resultado y se inicializa con valor cero.
    let resultado = 0;
    //Después de obtener los datos de los elementos input se realiza el proceso de suma y se le asigna dicho valor a la variable resultado
    resultado = numero1 + numero2;
    //Se asigno a la variable "mostrar" el elemento con el id "resultado"
    let mostrar = document.getElementById('resultado');
    //Por medio del método inner se asigna el valor de la variable resultado para que se pueda imprimir en el elemento
    mostrar.innerHTML = resultado;
}