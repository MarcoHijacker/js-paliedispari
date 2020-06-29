// Es.3 Lista nomi cognomi casuali - 29 Giugno 2020 JS

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

// Dichiarazione variabili
var databaseNomi = [
"Marco",
"Alessandro",
"Vincenzo",
"Roberto",
"Giuseppe",
"Marianna",
"Giulia",
"Marika",
"Alessandra",
"Carmela"
];

var databaseCognomi = [
"Rossi",
"Bianchi",
"Verdi",
"Vincenti",
"Mingardo",
"Balotelli",
"Cannavaro",
"Nesta",
"Buffon",
"Ronaldo"
];

var listaInvitati = [];
var nomeRandom;
var cognomeRandom;

for (var i = 0; i < 10; i++) {
  nomeRandom = getRandomIntInclusive(0, databaseNomi.length - 1);
  cognomeRandom = getRandomIntInclusive(0, databaseCognomi.length - 1);
  listaInvitati.push(databaseNomi[nomeRandom] + " " + databaseCognomi[cognomeRandom]);
}

console.log(listaInvitati);

// ----------------------------------------------------------- //

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
