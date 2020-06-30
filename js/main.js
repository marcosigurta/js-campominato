// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue:
// Buon pranzo e buon lavoro!!!

//creo array da riempire con i numeri della CPU e dell'utente;
var arrayNumUtente = [];
var arrayNumCpu = [];

//creo Un For per creare numeri random per CPU, e li pusho nell'array Rispettiva;
for (let i = 1; i <= 5; i++) {
    var casualCpuNum = getRandomInt(1, 100);
    arrayNumCpu.push(casualCpuNum);
}

console.log(arrayNumCpu);

//chiedo all'utente TOT volte di inserire un numero sempre diverso;
do {
    for (var i = 0; i < getRandomInt(5, 5); i++) {
        var numUtente = parseInt(prompt('inserisci un numero tra 1 e 100'));
        arrayNumUtente.push(numUtente);
    }
} while (numUtente[i] != numUtente[i])
console.log(arrayNumUtente);
arrayNumCpu.push(casualCpuNum);

//controllo che il numero inserito dall'utente non sia uguale a uno dei numeri presenti nella lista

for (var i = 0; i < arrayNumCpu.length; i++) {
    trovato = true;
    if (arrayNumUtente[i] == arrayNumCpu[i]) {
        alert('hai perso');
    } else {
        console.log('Hai vinto');
    }
}


























function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}