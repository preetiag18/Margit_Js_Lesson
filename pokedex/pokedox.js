const content = document.querySelector("#cards");
const buttons = document.querySelector(".buttons");
const searchPokedox = document.querySelector(".SearchPokedox");

let pokemonGenerationData;
fetch("https://pokeapi.co/api/v2/generation")
  .then((res) => res.json())
  .then((data) => {
    pokemonGenerationData = data.results;
    let p = pokemonGenerationData
      .map((item, index) => {
        return `<button class = "btn" onClick="generationPokemonGet(${index}+1)">${item.name}</button>`;
      })
      .join("");
    buttons.innerHTML = p;
  });

let pokemanSpecies = [];
let z = [];
const generationPokemonGet = (generationNumber) => {
  searchPokedox.innerHTML = "";
  z = [];
  const url = `https://pokeapi.co/api/v2/generation/${generationNumber}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("hello there is species");
      pokemanSpecies = data.pokemon_species;
      const listOfPokemonDetailsPromises = [];
      pokemanSpecies.map((item) => {
        const splittedURL = item.url.split("/");
        const number = splittedURL[splittedURL.length - 2];

        const prom = fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
          .then((res) => res.json())
          .then((data) => {
            const typesOfPokemon = [];

            data.types.map((items) => {
              typesOfPokemon.push(items.type["name"]);
            });

            const pokemon_details = {
              name: item.name,
              number: number,
              types: typesOfPokemon,
            };
            z.push(pokemon_details);
          });
        listOfPokemonDetailsPromises.push(prom);
      });

      Promise.all(listOfPokemonDetailsPromises).then((unUsedRes) => {
        const i = document.createElement("input");
        i.id = "search";
        i.placeholder = "Search...";
        i.type = "text";
        i.onkeyup = searchPokemon;
        searchPokedox.appendChild(i);

        let itemData = z.map((item) => {
          return `<div class="card">
            <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              item.number
            }.png" />
            <h2>${item.name}</h2>
            <span>${item.types.toString()}</span>
            </div>`;
        });
        content.innerHTML = itemData.join("");
      });
    });
};

const searchPokemon = () => {
  const searchInput = document.querySelector("#search");
  const filterdPokemon = z.filter((item) => {
    const searchPokemonName = item.name.startsWith(searchInput.value);
    return searchPokemonName === true;
  });

  let itemData2 = filterdPokemon.map((item) => {
    return `<div class="card">
      <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        item.number
      }.png" />
      <h2>${item.name}</h2>
      <span>${item.types.toString()}</span>
      </div>`;
  });
  content.innerHTML = itemData2.join("");
};
