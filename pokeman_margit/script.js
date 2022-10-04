const content =document.querySelector('.pokedex')
let pokeData = [];
let pokeId;
let pokeImage;
const fetchData = () =>{
  const url = "https://pokeapi.co/api/v2/pokemon";
    fetch(`${url}`,{
      method:'get'
    })
    .then((res)=>res.json()) 
    .then((data) => {
      console.log("this is my first url data",data)
        pokeData = data.results;
         console.log(pokeData);
        for(let i = 0; i < pokeData.length; i++){
          const newUrl = pokeData[i].url;
          // console.log("details are here",newUrl);
         fetch(`${newUrl}`)
            .then(response => response.json())
            .then(data2 => {
              console.log('getting details',data2);
                pokeId = data2.id;
                pokeImage = data2.sprites.other["official-artwork"].front_default;
                console.log(pokeId);
                console.log(pokeImage);
            });
          
        }
        pokeCards();
    })
   
}


const pokeCards = () =>{
    
    const cards = pokeData.map((pokemon,i)=>{
        return ` <div>
        <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png"
        alt="pokeman"
       />
        <h2>${pokemon.name}</h2>
        
       </div>
       <p>${i+1}</p>`;
    }).join('');
   
    content.innerHTML = cards;
};

fetchData();