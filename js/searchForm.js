import displayCharacters from "./displayCharacters.js";
import displaySearch from "./displaySearch.js";

const form = document.querySelector('.search-form');
const input = document.querySelector('[name="user-input"]');

form.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const value = input.value;

    if(!value) displayCharacters();

    displaySearch(value);
});

