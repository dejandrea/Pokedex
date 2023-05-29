
convertPokemonToLi = (pokemon) => {
  
  let cod;
  if (pokemon.cod < 10) {
    cod = "#00"+pokemon.cod;
  } else {
    cod = "#0"+pokemon.cod;
  }
  return `   
        <li class="pokemon ${pokemon.type}">
            <span class="number">${cod}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>
                <img
                src="${pokemon.image}"
                alt="${pokemon.name}"
                />
            </div>
        </li>
        `;
};

pokeApi.getPokemons(0,50).then((pokemonList = []) => {
  // debugger;

  document.getElementById("pokemonList").innerHTML += pokemonList
    .map(convertPokemonToLi)
    .join("");
});
