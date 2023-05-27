convertPokemonToLi = (pokemon, index) => {
  index++;
  let cod;
  if (index < 10) {
    cod = "#00"+index;
  } else {
    cod = "#0"+index;
  }
  return `   
        <li class="pokemon">
            <span class="number">${cod}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
                </ol>
                <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg"
                alt="${pokemon.name}"
                />
            </div>
        </li>
        `;
};

pokeApi.getPokemons(0,20).then((pokemonList = []) => {
  // debugger;

  document.getElementById("pokemonList").innerHTML += pokemonList
    .map(convertPokemonToLi)
    .join("");
});
