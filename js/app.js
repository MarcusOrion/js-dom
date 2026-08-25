/* Scrivere un programma che chieda all'utente:
    Il numero di chilometri da percorrere
    Età del passeggero */
//DOM References
const nameInput = document.getElementById('name');
const distanceInput = document.getElementById('distance');
const ageSelect = document.getElementById('age');

const displayName = document.getElementById('display-name');
const displayOffer = document.getElementById('display-offer');
const displayWagon = document.getElementById('display-wagon');
const displayCode = document.getElementById('display-cp');
const displayPrice = document.getElementById('display-cost');
//Evento click bottone
const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
//Collezione dati
const name = nameInput.value;
const distance = Number(distanceInput.value);
const age = ageSelect.value;
//Calcolo prezzo base
let price = distance * 0.21;
let discount = 0;
//Applicazione sconti
if(age === 'minorenne') {
    discount = price * 0.20;
    displayOffer.innerHTML = 'Biglietto Minorenne';
} else if (age === 'over') {
    discount  = price * 0.40;
    displayOffer.innerHTML = 'Biglietto Over 65';
} else {
    displayOffer.innerHTML = 'Biglietto Standard';
}
const finalPrice = price - discount;
//Calcolo carrozza (randomico)
let carrozza = Math.floor(Math.random()*10 + 1);
//Calcolo Codice CP (randomico)
let codice = Math.floor(Math.random() * 90000) + 10000;
//Popolamento card Tuo Biglietto
displayName.innerHTML = name;
displayWagon.innerHTML = carrozza;
displayCode.innerHTML = codice;
displayPrice.innerHTML = finalPrice.toFixed(2) + '€';
})
//Cancella il biglietto generato quando si preme il tasto 'Annulla'
userForm.addEventListener('reset', function(){
displayName.innerHTML = '';
displayWagon.innerHTML = '';
displayCode.innerHTML = '';
displayPrice.innerHTML = '';
displayOffer.innerHTML = '';
})
