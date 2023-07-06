/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
}
console.log(area(20, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazysum(n1, n2) {
  sommaParametri = n1 + n2;
  if (n1 != n2) {
    sommaParametri = n1 + n2;
  } else if ((n1 = n2)) {
    sommaParametri = (n1 + n2) * 3;
  }
  return sommaParametri;
}

console.log(crazysum(12, 12));
console.log(crazysum(6, 8));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const num = 19;
function crazyDiff(n1) {
  DifferenzaParametri = n1 - 19;
  if (n1 > 19) {
    DifferenzaParametri = DifferenzaParametri * 3;
  }
  return DifferenzaParametri;
}
console.log(crazyDiff(39));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n1) {
  if (n1 <= 100 && n1 > 20) {
    console.log("true");
  } else if (n1 === 400) {
    console.log("true");
  } else {
    console.log("false");
  }
}

boundary(100);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
  const stringa1 = " is offline at the moment";
  if (stringa1.startsWith("Epicode")) {
    console.log(stringa1);
  } else if (stringa1.startsWith("")) {
    console.log(str, stringa1);
  }
}
epify("Epicode");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(n) {
  if (n % 7 === n % 3) {
    console.log("è multiplo di entrambi");
  } else if (n % 3 === 0) {
    console.log("multiplo di 3!");
  } else if (n % 7 === 0) {
    console.log("multiplo di 7!");
  } else {
    console.log("non e' un multiplo di 7 o 3");
  }
}

check3and7(21);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  let splitString = str.split("");
  return splitString;
}
reverseString("Epicode");
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
