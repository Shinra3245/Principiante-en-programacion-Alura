function holamundo (){
    console.log('Hola mundo')
}

holamundo();

function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice");


function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);


function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);


function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(6, 9);
console.log(numeroMayor);

function numeroCuadrado(numero){
    return numero * numero;
}

let numeroMultiplicado = numeroCuadrado(7);
console.log(numeroMultiplicado);
