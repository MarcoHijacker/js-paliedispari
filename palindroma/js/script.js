// Esercizio Palindroma JS

// Dichiarazione variabili
var parola = prompt("Inserisci una parola per controllare se è palindroma: ");

if (isPalindroma(parola)) {
  alert("La parola inserita è palindroma!");
} else {
  alert("La parola inserita NON è palindroma!");
}

// Definizione funzioni
function isPalindroma(word) {
  var reverseWord = ""; // Stringa
  for (var i = word.length - 1; i >= 0; i--) { // Inserisco nella stringa reverseWord i caratteri della parola fornita, ma da fondo a cima
    reverseWord += word[i]; // Associazione caratteri
  }
  if (word == reverseWord) { // Se la parola nell'argomento è uguale a sé stessa, invertita, questa è palindroma
    return true; // parola palindroma
  } else {
    return false; // parola non palindroma
  }
}
