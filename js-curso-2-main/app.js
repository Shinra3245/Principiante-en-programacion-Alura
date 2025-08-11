
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';

function Console() {
    alert ('El boton fue clicado')
}

function Prompt() {
let Ciudad = prompt('Escribe el nombre de una ciudad en Brasil');
alert (`Estuve en ${Ciudad} y me acorde de ti`);
}

function Alert() {
    alert('YO AMO JS');
}

function Suma () {
let Num1 = parseInt(prompt('Indicame el primer numero de la suma'));
let Num2 = parseInt(prompt('Indicame el segundo numero de la suma'));
let Suma = Num1 + Num2
alert (`El resultado de la suma es ${Suma}`)
}