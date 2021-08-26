// Creare un array
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
// Chiedere il cognome all'utente ed inserirlo nell'array
var cognomeUtente = prompt( "Inserisci il tuo Cognome" );
listaCognomi.push(cognomeUtente);
//Stampare la lista ordinata in ordine alfabetico
listaCognomi.sort();
console.log(listaCognomi)
//Scrivere la posizione del nuovo cognome partendo da 1
var messaggio = "La posizione del tuo cognome in lista è la seguente: " + (listaCognomi.indexOf (cognomeUtente) +1 );
    alert(messaggio);
// alert(("La posizione del tuo cognome in lista è la seguente: ") + (listaCognomi.indexOf (cognomeUtente) +1 ));
document.getElementById("position").innerHTML = ("La posizione nella lista del tuo cognome è la seguente: ") + (listaCognomi.indexOf (cognomeUtente) +1 );