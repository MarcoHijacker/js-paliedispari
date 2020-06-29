// Es.4 Pareggiamento Array - 29 Giugno 2020 JS

// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

// Dichiarazione variabili

var arrayUno = [
  "Uno",
  "Due",
  "Tre",
  "Quattro",
  "Cinque",
  "Sei",
  "Sette",
  "Otto",
  "Nove",
  "Dieci"
];

var arrayDue = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five"
];

var differenziale = Math.abs(arrayUno.length - arrayDue.length);

if (arrayUno.length > arrayDue.length) {
  for (var i = 0; i < differenziale; i++) { // Oppure potevo evitare il for ed il differenziale e usare il while confrontando in esso le length dei 2 array
    arrayDue.push(Math.floor(Math.random() * 10 + 1));
  }
} else if (arrayDue.length > arrayUno.length) {
   for (var i = 0; i < differenziale; i++) {
   arrayUno.push(Math.floor(Math.random() * 10 + 1));
 }
}

console.log(arrayUno);
console.log(arrayDue);
