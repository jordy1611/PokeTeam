
export function getSinglePokemonData(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  }