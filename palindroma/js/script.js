alert('welcome');
//Scrivi una funzione per capire se la parola è palindroma
// una parola è tale se la prima è leggibile sia da destra che sinistra. La prima lettera è uguale all'ultima, la seconda alla penultima è così via
var parolaScelta = prompt('scegli una parola e verificheremo se è palindroma');
console.log(parolaScelta);
function palindromo(parolaScelta){
  var i = parolaScelta.length;
  while(i > 0){
    i--;
    if( parolaScelta[i] = parolaScelta.charAt(parolaScelta.length)-1 ){
      console.log('la parola è palindroma');
    }else{
      console.log('la parola non è palindroma');
    }
    return risultato;
}
