let listaGenerica = [];

let lenguajesProgramacion = ["javascript" , "C" , 'C++', 'Kotlin', 'Python'];

lenguajesProgramacion.push('Java' , 'Ruby' , 'Golang');

function MostrarArray (){
  console.log(lenguajesProgramacion);
}

MostrarArray();

function arrayinverso(){
  lenguajesProgramacion.reverse();
  console.log(lenguajesProgramacion);
}

arrayinverso();

function listaNumeros(){

  let suma = 0;
  for (let i = 0; i < numeros.length; i++){
    suma += numeros[i];
  }

  let promedio = suma / numeros.length;

  return promedio
}
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("el promedio es:", listaNumeros(numeros));

function mostrarMayorYMenor(lista) {
  if (lista.length === 0) {
    console.log("La lista está vacía.");
    return;
  }

  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log("El número más grande es:", mayor);
  console.log("El número más pequeño es:", menor);
}


let listanumerosMasymenos = [1,2,3,4,5,6,7,8,9,10];
mostrarMayorYMenor(listanumerosMasymenos);

function Contardel1al10() {
  for(let i = 0; i < 10; i++ ){
    console.log("numero", i);
  }
}

Contardel1al10();

function pares(){
  for (let i = 0; i < 100; i+= 2){
    console.log(i)
  }
}

pares();


function recorrerListaNombres(){
  for (let i = 0; i < listaNombres.length; i++){
    console.log(listaNombres[i]);
  }
}

   