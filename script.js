import PokemonCard from "./modules/PokemonCards.js";

const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Planta",
    hp: 45,
    attack: 49,
    defense: 49,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 4,
    name: "Charmander",
    type: "Fuego",
    hp: 39,
    attack: 52,
    defense: 43,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 7,
    name: "Squirtle",
    type: "Agua",
    hp: 44,
    attack: 48,
    defense: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
];

const card = new PokemonCard(pokemons);

document.addEventListener("DOMContentLoaded", function () {
  card.init();
});
