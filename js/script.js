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
    for (var i = 0; i < array.length; i++){
        if (element == array [i]){
            return true;
        }
    }
    return false;
}
// /FUNZIONI COMUNI

// VARIABILI
var bombe = []; //Array che contiene i numeri corrispondenti alle bombe

var tentativi = []; //Array che contiene i tentativi effettuati dall'utente

var tentativiMassimi = 84; //Numero massimo di tentativi effettuabili dall'utente
// /FINE VARIABILI

// Il computer deve generare 16 numeri casuali, quindi inserirli nell'array "bombe". Questi numeri non possono essere ripetuti
while (bombe.length < 16){
        var numeroCausale = getRandomNumber(1, 100);

        if(!isInArray(numeroCausale, bombe)){
            bombe.push(numeroCausale);
        }
}

console.log("Bombe", bombe); //Log che mi mostra i numeri casuali assegnati come "bombe"

// Logica del gioco
var gameOver = false;

while (tentativi.length < tentativiMassimi && gameOver == false){
    do{
        sceltaUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
    } while (sceltaUtente < 1 || sceltaUtente > 100 || isNaN(sceltaUtente))

    if(isInArray(sceltaUtente, bombe)){
        gameOver = true;
        alert("BOOM! Mi dispiace, hai preso la bomba. Il tuo punteggio è " + tentativi.length)
    } else if(!isInArray(sceltaUtente, tentativi)){
        tentativi.push(sceltaUtente);
    }

    console.log(sceltaUtente, tentativi.length);
}

if (tentativi.length == tentativiMassimi){
    alert("COMPLIMENTI! Non hai colpito nessuna bomba, hai vinto!")
}