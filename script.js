document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("pokemon-container");
    const modal = document.getElementById("pokemon-modal");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalDetails = document.getElementById("modal-details");

    // Fetch Pokémon data
    async function fetchPokemons() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=250");
        const data = await response.json();
        displayPokemons(data.results);
    }

    function displayPokemons(pokemons) {
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

    function getPokemonImage(name) {
        return `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
    }

    async function showModal(pokemonName) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const pokemon = await response.json();
        modalImage.src = getPokemonImage(pokemon.name);
        modalName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        modalDetails.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;
        modal.style.display = "block";
    }

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    fetchPokemons();
});