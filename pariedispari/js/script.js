// Esercizio Pari e Dispari JS
// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Dichiarazione variabili
var chance = "";
var number = 0;
var cpu = 0;
var result = 0;

chance = prompt("Scegli: Pari o Dispari?").toLowerCase(); // L’utente sceglie pari o dispari
number = parseInt(prompt("Scegli un numero da 1 a 5: ")); // e inserisce un numero da 1 a 5.

cpu = getRandomIntInclusive(1, 5);
result = number + cpu; // Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if(oddOrEven(result) == chance) {
  alert("La cpu ha estratto " + cpu + ", la somma è " + result + " quindi " + oddOrEven(result) + ". Hai vinto!");
} else if (oddOrEven(result) != chance) {
  alert("La cpu ha estratto " + cpu + ", la somma è " + result + " quindi " + oddOrEven(result) + ". Hai perso...");
} // Dichiariamo chi ha vinto.


// Definizione funzioni
// Numero random fra min (incluso) e max (incluso)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Restituisce stringa dispari, se il numero è dispari e viceversa
function oddOrEven(num) {
  num = parseInt(num);
  if (num % 2) {
    return "dispari";
  } else {
    return "pari";
  }
}
