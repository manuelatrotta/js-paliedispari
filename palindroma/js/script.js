alert('welcome');
//Scrivi una funzione per capire se la parola è palindroma
// una parola è tale se la prima è leggibile sia da destra che sinistra. La prima lettera è uguale all'ultima, la seconda alla penultima è così via
var parolaUtente = prompt('inserisci una parola');
var parolaGirata = rovesciaParola(parolaUtente);
if(parolaGirata == parolaUtente){
  console.log('è palindroma');
}else{
  console.log('non è palindroma');
}

function rovesciaParola(parola){
  var parolaReverse = '';
  for(var i = parola.length -1; i>=0; i--){
    parolaReverse += parola[i];
  }
  return parolaReverse;
}
