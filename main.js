/*Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?*/

let parola = prompt("Una parola?").toLowerCase();

console.log(`La parola è: ${parola}`);

function palindroma() {
    let parolaInversa = "";

    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInversa += parola.charAt(i);
    }

    if (parola === parolaInversa) {
        console.log(`La parola "${parola}" e "${parolaInversa}" è palindroma.`);
    } else {
        console.log(`La parola "${parola}" e "${parolaInversa}" non è palindroma.`);
    }
}

palindroma();


// ------

function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

function parioDispari(numero) {
    return numero % 2 === 0 ? "pari" : "dispari";
    }
    

let sceltaUtente = prompt ("Scegli fra Pari o Dispari");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"))
    
if (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
    console.log("Numero non valido");
} else {
    let numeroComputer = numeriRandom(1, 5);
    console.log(`Il numero del computer è: ${numeroComputer}`);
    let sommaNumeri = numeroUtente + numeroComputer;
    console.log(`La somma dei numeri è: ${sommaNumeri}`);
    let risultatoPariDispari = parioDispari(sommaNumeri);
    console.log(`La somma è: ${risultatoPariDispari}`);
    if (sceltaUtente === risultatoPariDispari) {
    console.log("Hai vinto!");
    } else {
    console.log("Hai perso.");
    }
}