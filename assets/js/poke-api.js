const pokeApi = {};

convertPokeApiDetailsToPokemon = (pokeDetail)=>{
    const pokemon = new Pokemon()
    pokemon.cod = pokeDetail.id 
    pokemon.name = pokeDetail.name
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default

    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    return pokemon
}

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
        .then((res) => res.json())
        .then(convertPokeApiDetailsToPokemon)
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonDetail) =>  pokemonDetail)
    .catch((err) => console.error(err));
};
