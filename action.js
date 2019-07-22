// JSnack #3:
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// Mi preparo le variabili

var stampa, num;

stampa = document.getElementById('my');

// Chiedo all'utente di inserire 5 volte un numero qualsiasi
// Stampo la somma di tutti i numeri

// Uso variablie for

for (i = 0; i < 5; i++) {
  num = parseInt(prompt("Inserisci un numero qualsiasi"));
  console.log(num);
  stampa.innerHTML = num;
}

// Faccio la variabile while

// while (i = 0; i < 5) {
//   console.log(num);
//   stampa.innerHTML = num;
//   i++;
// }
