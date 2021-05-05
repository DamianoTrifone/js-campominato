// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// FUNZIONI COMUNI
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function isInArray(element, array){
      check = false
      for(var i = 0; i < array.length; i++){
      if(element == array [i]){
        return !check;
      }
  }
  return check;
}
// /FUNZIONI COMUNI

// VARIABILI
var bombe = []; //Array che contiene i numeri corrispondenti alle bombe
console.log("Bombe", bombe);
var tentativi = []; //Array che contiene i tentativi effettuati dall'utente

var tentativiMassimi = 84; //Numero massimo di tentativi effettuabili dall'utente
// /FINE VARIABILI

// Il computer deve generare 16 numeri casuali, quindi inserirli nell'array "bombe". Questi numeri non possono essere ripetuti
for(var i = 0; i < 17; i++){
    var numeroCausale = getRandomNumber(1, 100);

    if(!isInArray(numeroCausale, bombe)){
        bombe.push(numeroCausale)
    }
}