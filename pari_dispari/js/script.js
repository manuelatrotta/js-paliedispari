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
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}

//Sommiamo i due numeri e dichiariamo chi ha vinto (controlliamo se la somma da pari o dispari).
var somma = sceltaNumero + randomNumber;
console.log(somma);
if(somma % 2 == 0 && sceltaUtente == 'pari'){
  console.log('hai vinto');
}
else if(somma % 2 != 0 && sceltaUtente == 'dispari'){
  console.log('hai vinto');
}
else if (somma % 2 == 0 && sceltaUtente == 'dispari'){
  console.log('hai perso');
}
else{
  console.log('hai perso');
}
