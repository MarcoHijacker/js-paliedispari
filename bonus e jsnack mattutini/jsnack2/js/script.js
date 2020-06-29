// Es.2 Generatore frasi fortuna - 29 Giugno 2020 JS

// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi
// Oggi troverai una cosa dimenticata
// Ciò che è fatto è fatto
// Il buon giorno si vede dal mattino
// Sicuro di aver chiuso il gas?
// Chi semina vento raccoglie tempesta
// Il mattino ha l’oro in bocca
// Tanto va la gatta al lardo che ci lascia lo zampino

// Dichiarazione variabili
var databaseFrasi = [
  "Oggi troverai una cosa dimenticata!",
  "Ciò che è fatto è fatto!",
  "Il buon giorno si vede dal mattino",
  "Sicuro di aver chiuso il gas?",
  "Chi semina vento raccoglie tempesta",
  "Il mattino ha l’oro in bocca",
  "Tanto va la gatta al lardo che ci lascia lo zampino"
];

var random = Math.floor((Math.random() * ((databaseFrasi.length - 1) - 0 + 1) + 0)); // Nel nostro caso max: 6, min: 0

alert(databaseFrasi[random]);
