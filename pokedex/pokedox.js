const content = document.querySelector(".cards");
const buttons = document.querySelector(".buttons");
const searchPokedox = document.querySelector(".searchPokedox");
const pokemonCounts = document.querySelector(".pokemonCounts");

let pokemonGenerationData;
fetch("https://pokeapi.co/api/v2/generation")
  .then((res) => res.json())
  .then((data) => {
    pokemonGenerationData = data.results;
    let p = pokemonGenerationData
      .map((item, index) => {
        return `<button class = "btn" onClick="generationPokemonGet(${index}+1)">${capitalizeFirstLetter(
          item.name.split("-")[0].substring(0, 3)
        )} ${index + 1}</button>`;
      })
      .join("");
    buttons.innerHTML = p;
  });

let pokemanSpecies = [];
let z = [];
const generationPokemonGet = (generationNumber) => {
  searchPokedox.innerHTML = "";
  const i = document.createElement("input");
  i.id = "search";
  i.placeholder = "search pokemon by name";
  i.type = "search";
  i.addEventListener("input", (event) => {
    searchPokemon(event.target.value);
  });

  searchPokedox.appendChild(i);
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
        let itemData = z.map((item) => {
          return getCard(item.number, item.types, item.name);
        });
        pokemonCounts.textContent = `There are ${pokemanSpecies.length} pokemons in generation ${generationNumber}`;
        content.innerHTML = itemData.join("");
      });
    });
};

const searchPokemon = (searchInput) => {
  const filterdPokemon = z.filter((item) => {
    const searchPokemonName = item.name.startsWith(searchInput.toLowerCase());
    return searchPokemonName === true;
  });

  let itemData2 = filterdPokemon.map((item) => {
    return getCard(item.number, item.types, item.name);
  });
  content.innerHTML = itemData2.join("");
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getCard = (number, types, name) => {
  return `<div class="card">
      <img class="pokemonImage" src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png" />
      <h2>${capitalizeFirstLetter(name)}</h2>
      ${types
        .map((type) => {
          const typeUrl = `./assets/pokemon_types_icons/${type}.png`;
          return `<img class="typeIcon" src=${typeUrl}></img>`;
        })
        .join("")}
      </div>`;
};
