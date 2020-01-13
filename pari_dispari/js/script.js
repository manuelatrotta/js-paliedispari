alert('welcome');
//L’utente sceglie pari o dispari e un numero da 1 a 5.
var sceltaUtente = prompt('scegli pari o dispari');
var sceltaNumero = parseInt(prompt('scegli ora un numero da 1 a 5'));
console.log(sceltaUtente);
console.log(sceltaNumero);
//Generiamo un numero random (sempre da 1 a 5) per il computer.
var randomNumber = getRandom(1, 5);
console.log(randomNumber);
function getRandom (min, max){
  min = Math.ceil(1);
  max = Math.floor(5);
  var random = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  return random;
}

//Sommiamo i due numeri e dichiariamo chi ha vinto (controlliamo se la somma da pari o dispari).
var somma = sceltaNumero + randomNumber;
console.log(somma);
