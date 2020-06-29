// Esercizio Palindroma JS

// Dichiarazione variabili
var parola = prompt("Inserisci una parola per sapere se è palindroma: ");

if (isPalindroma(parola)) {
  alert("La parola inserita è palindroma!");
} else {
  alert("La parola inserita NON è palindroma!");
}

// Definizione funzione
function isPalindroma(word) {
  var verify = []; // Array in cui salvo i confronti, lettera per lettera
  for (var i = 0; i < Math.floor(word.length*0.5); i++) { // Se la parola è lunga n, mi bastano n/2 confronti
    if (word[i] == word[(word.length-1) - i]) { // Verifico, al variare di i da 0 a n/2, se la prima lettera della stringa è uguale all'ultima e così via a 'stringere'
      verify.push(true); // Se è vero, inserisco un true nell'array verify
    } else {
      verify.push(false); // Altrimenti inserisco un falso nell'array verify
    }
  }
  for (var i = 0; i < Math.floor(word.length*0.5); i++) { // Verifico com'è configurato l'array coi confronti lettera per lettera
    if(verify[i] == false) { // Mi basta avere un false (quindi 2 lettere specchiate diverse) e la parola è subito NON palindroma
      return false;
    }
  }
  return true; // Se arrivo qui, non ho avuto alcun false, quindi la parola sarà palindroma
}
