
function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

let resultadoIMC = calcularIMC(1.75, 70);
console.log("El IMC es:", resultadoIMC);


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
let calcularFactorial = factorial(3)
console.log(calcularFactorial)

function convertirDolar(dolares){
  const tasacambio = 4.80;
 return dolares *  tasacambio;
}

let resultado = convertirDolar(10);
console.log(resultado);

function AreaPerimetroRectangulo(altura,base){
  let area = (base*altura);
  let perimetro = 2 * (base + altura)
  return (`el area es ${area} y el perimetro es ${perimetro}`); 
}

let resultadoRectangulo = AreaPerimetroRectangulo(5, 5);
console.log(resultadoRectangulo);


function AreaPerimetroCirculo(radio) {
  const pi = 3.14;
  let area = pi * (radio * radio);
  let perimetro = 2 * pi * radio;
  return `El área es ${area.toFixed(2)} y el perímetro es ${perimetro.toFixed(2)}`;
}

let resultadoCirculo = AreaPerimetroCirculo(10);
console.log(resultadoCirculo);


function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Ejemplo: mostrar la tabla del 5
tablaMultiplicar(5);
