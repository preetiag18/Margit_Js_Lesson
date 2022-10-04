const content =document.querySelector('.card')
let pokeData = [];
const fetchData = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then((res)=>res.json())
    .then((data) => {
        pokeData = data.results;
        console.log(pokeData);
        pokeCards();
});
};

const pokeCards = () =>{
    const cards = pokeData.map((pokemon)=>{
        return ` <div>
        <img
          src="https://www.pngitem.com/pimgs/m/529-5297938_151-mew-pokemon-png-transparent-png.png"
          alt=""
        />
        <h2>${pokemon.name}</h2>
      </div>`;
    }).join('');
    content.innerHTML = cards;
};

fetchData();