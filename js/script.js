// Creare un array
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
// Chiedere il cognome all'utente ed inserirlo nell'array
var cognomeUtente = prompt( "Inserisci il tuo Cognome" );
listaCognomi.push(cognomeUtente);
//Stampare la lista ordinata in ordine alfabetico
listaCognomi.sort();
console.log(listaCognomi)
//Scrivere la posizione del nuovo cognome partendo da 1
console.log("La posizione nella lista del tuo cognome è la seguente:");
console.log(listaCognomi.indexOf (cognomeUtente) +1 );