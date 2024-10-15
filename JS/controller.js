import { fetchPokemons, fetchPokemonDetails } from './model.js';
import { displayPokemons, showModal, hideModal } from './view.js';

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const pokemonData = await fetchPokemons();
        displayPokemons(pokemonData);

        // Maneja eventos de cierre del modal
        const closeButton = document.querySelector(".close-button");
        closeButton.addEventListener("click", hideModal);

        // Cerrar modal al hacer clic fuera del contenido
        window.addEventListener("click", (event) => {
            const modal = document.getElementById("pokemon-modal");
            if (event.target === modal) {
                hideModal();
            }
        });
    } catch (error) {
        console.error("Error initializing app:", error);
    }
});
