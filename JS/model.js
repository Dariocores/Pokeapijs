export async function fetchPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=250");
    const data = await response.json();
    return data.results;
}

export async function fetchPokemonDetails(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await response.json();
    return pokemon;
}
