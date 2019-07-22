// JSnack #3:
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// Mi preparo le variabili

var stampa, num1, num2, num3, num4, num5;

stampa = document.getElementById('my');

// Chiedo all'utente di inserire 5 volte un numero qualsiasi

num1 = parseInt(prompt("Inserisci un numero qualsiasi"));
num2 = parseInt(prompt("Inserisci un numero qualsiasi"));
num3 = parseInt(prompt("Inserisci un numero qualsiasi"));
num4 = parseInt(prompt("Inserisci un numero qualsiasi"));
num5 = parseInt(prompt("Inserisci un numero qualsiasi"));

// Stampo la somma di tutti i numeri

console.log(num1 + num2 + num3 + num4 + num5);
stampa.innerHTML = num1 + num2 + num3 + num4 + num5;

// Faccio la variabile for

// for (i=0; )


// Faccio la variabile while
