 let btnCalcular = document.getElementById('btnCalcular');
 let btnOrdenarCaracteres = document.getElementById('btnOrdenarCaracteres');
 let contador = 0;



 evento();

 function evento() {
     btnCalcular.addEventListener('click', addElements);
     btnOrdenarCaracteres.addEventListener('click', CalcularCadena);
 }

 function addElements() {

     let TamArray = Number(document.getElementById('TamArray').value);


     for (let i = 0; i < TamArray; i++) {
         // ************ Lista 1 ************************
         let li = document.createElement('li');
         li.setAttribute('class', 'list-group-item mb-2');

         let input = document.createElement('input');
         input.setAttribute('class', 'form-control');
         input.setAttribute('id', `listArrayR${i}`);
         input.setAttribute('placeholder', `Número ${i +1}`);

         // lista 1 
         document.getElementById('ArrayList1').appendChild(li);
         li.appendChild(input);
         contador++;

     }

 }

 function CalcularCadena() {

     let array1 = [];
     let media = 0,
         mediana1 = 0,
         mediana2 = 0;
     let maximoNumRepeticiones = 0;
     let moda = 0;



     for (let i = 0; i < contador; i++) {

         array1[i] = Number(document.getElementById(`listArrayR${i}`).value);
         // console.log(array1[i]);
         media = media + array1[i];

         // ++++++++++++++++++++++++++
         let numRepeticiones = 0;
         for (let j = 0; j < contador; j++) {
             if (array1[i] == array1[j]) {
                 numRepeticiones++;
             } //fin if
             if (numRepeticiones > maximoNumRepeticiones) {
                 moda = array1[i];
                 maximoNumRepeticiones = numRepeticiones;
             } //fin if
         }
         //fin for
         // console.log(moda);
         // ++++++++++++++++++++++++
     }

     if (contador % 2 == 0) {
         //se obtendrán dos elementos
         let mitad = 0;
         mitad = contador / 2;
         // console.log(mitad);
         mediana1 = array1[mitad - 1];
         mediana2 = array1[mitad];
     } else {
         //Se obtiene un elemento
         mitad = contador / 2;
         mediana1 = array1[mitad - 0.5];
     }

     media = media / contador;
     let arreglo = [],
         varianza = 0;
     for (let i = 0; i < contador; i++) {
         arreglo[i] = Math.pow(array1[i] - media, 2);
         varianza = varianza + arreglo[i];
     }
     varianza = varianza / contador;

     let desviacionEstandar = 0;
     desviacionEstandar = Math.sqrt(varianza);
     MostrarElementos(media, mediana1, mediana2, moda, varianza, desviacionEstandar);


 }



 function MostrarElementos(media, mediana1, mediana2, moda, varianza, desviacionEstandar) {

     let ConcatenarResultado = "";

     ConcatenarResultado = `<p>La media es ${media}. <br> La mediana es ${mediana1},${mediana2}. <br> La moda es ${moda}<br>La varianza es ${varianza}<br> La desviación estandar es ${desviacionEstandar}</p>`;

     document.getElementById('listaImprimir').innerHTML = ConcatenarResultado;

 }