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
const distance = Numb(distanceInput.value);
const age = Numb(ageSelect.value);
console.log(name, distance, age)
})
