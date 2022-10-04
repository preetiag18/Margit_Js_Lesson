const content =document.querySelector('.card')
let pokeData = [];
const fetchData = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then((res)=>res.json())
    .then((data) => {
      const fetches = data.results.map((item) => {
        return fetch(item.url).then(res => res.json())
        .then((data) => {
          return {
          id:data.id,
          name: data.name,
          img:data.sprites.other["official-artwork"].front_default,
          types:data.types,

        };
      });  
    });

      Promise.all(fetches).then(res => {
        pokeData = res;
        pokeCards();
        console.log(pokeData);
      });
   
});


const pokeCards = () =>{
    const cards = pokeData.map((pokemon)=>{
        return ` <div>
        <img
          src="${pokemon.}"
        />
        <h2>${pokemon.name}</h2>
      </div>`;
    }).join('');
    content.innerHTML = cards;
};

fetchData();