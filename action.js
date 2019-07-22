// JSnack #3:
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// Mi preparo le variabili

var stampa, num, somma;

stampa = document.getElementById('my');
somma = 0;
// Chiedo all'utente di inserire 5 volte un numero qualsiasi
// Stampo la somma di tutti i numeri

// Uso variablie for

// for (i = 0; i < 5; i++) {
//   num = parseInt(prompt("Inserisci un numero qualsiasi"));
//   console.log(num);
//   somma = somma + num;
// }
//
// console.log (somma);
// stampa.innerHTML = somma;


// Faccio la variabile while

var i = 0;
while (i < 5) {
  num = parseInt(prompt("Inserisci un numero qualsiasi"));
  console.log(num);
  somma = somma + num;
  i++;
}

stampa.innerHTML = somma;
console.log(somma);
