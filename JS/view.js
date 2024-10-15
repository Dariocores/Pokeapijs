import { fetchPokemonDetails } from './model.js';

export function displayPokemons(pokemons) {
    const container = document.getElementById("pokemon-container");
    container.innerHTML = ''; // Asegura que el contenedor esté limpio

    pokemons.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${getPokemonImage(pokemon.name)}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
        `;
        card.addEventListener("click", () => showModal(pokemon.name));
        container.appendChild(card);
    });
}

export async function showModal(pokemonName) {
    const modal = document.getElementById("pokemon-modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalDetails = document.getElementById("modal-details");

    const pokemon = await fetchPokemonDetails(pokemonName);
    
    modalImage.src = getPokemonImage(pokemon.name);
    modalName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    modalDetails.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;
    
    modal.style.display = "block"; // Mostrar el modal
}

export function hideModal() {
    const modal = document.getElementById("pokemon-modal");
    modal.style.display = "none"; // Ocultar el modal
}

function getPokemonImage(name) {
    return `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
}
