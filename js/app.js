/* Scrivere un programma che chieda all'utente:
    Il numero di chilometri da percorrere
    Età del passeggero */
//DOM References
const nameInput = document.getElementById('name');
const distanceInput = document.getElementById('distance');
const ageSelect = document.getElementById('age');
//Evento click bottone
const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Andata a segno');
//Collezione dati
const name = nameInput.value;
const distance = Number(distanceInput.value);
const age = ageSelect.value;
console.log(name, distance, age)
//Calcolo prezzo base
let price = distance * 0.21;
let discount = 0;
//Applicazione sconti
if(age === 'minorenne') {
    discount = price * 0.80
} else if (age === 'over') {
    discount  = price * 0.60
}
const finalPrice = price - discount;

console.log(`Il prezzo del biglietto è ${finalPrice.toFixed(2)} €`);
})

/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65. */