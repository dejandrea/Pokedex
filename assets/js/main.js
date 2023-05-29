const pokemonsList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const maxRecords = 250
const limit = 20;
let offset = 0;

loadPokemonsItens = (offset, limit) => {
  pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
    pokemonsList.innerHTML += pokemonList
      .map((pokemon) => {
        let cod = pokemon.cod < 10 ? "#00" + pokemon.cod : "#0" + pokemon.cod;
        return `   
            <li class="pokemon ${pokemon.type}">
                <span class="number">${cod}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types
                          .map(
                            (type) => `<li class="type ${type}">${type}</li>`
                          )
                          .join("")}
                    </ol>
                    <img
                    src="${pokemon.image}"
                    alt="${pokemon.name}"
                    />
                </div>
            </li>
        `;
      })
      .join("");
  });
};

loadPokemonsItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsNextPage = offset+limit

  if (qtdRecordsNextPage >= maxRecords) {
    const newLimit = maxRecords-offset;
    loadPokemonsItens(offset, newLimit);

    //removendo o botão
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonsItens(offset, limit);
  }
});
