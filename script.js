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

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  updateCard();
});

function getElement(id) {
  return document.getElementById(id);
}

function updateCard() {
  let pokemonName = getElement("pokemon-name");
  let pokemonId = getElement("pokemon-id");
  let pokemonType = getElement("pokemon-type");
  let pokemonHp = getElement("pokemon-hp");
  let pokemonAttack = getElement("pokemon-attack");
  let pokemonDefense = getElement("pokemon-defense");
  let pokemonImage = getElement("pokemon-image");
  pokemonName.textContent = pokemons[currentIndex].name;
  pokemonId.textContent = `#${pokemons[currentIndex].id.toString()}`;
  pokemonType.textContent = pokemons[currentIndex].type;
  pokemonHp.textContent = pokemons[currentIndex].hp;
  pokemonAttack.textContent = pokemons[currentIndex].attack;
  pokemonDefense.textContent = pokemons[currentIndex].defense;
  pokemonImage.src = pokemons[currentIndex].image;

  updateCardColor(pokemons[currentIndex].type);
}

function nextPokemon() {
  currentIndex++;

  if (currentIndex >= pokemons.length) {
    currentIndex = 0;
  }

  updateCard();
}

function prevPokemon() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = pokemons.length - 1;
  }

  updateCard();
}

function updateCardColor(type) {
  const card = getElement("pokemon-type");

  switch (type) {
    case "Fuego":
      card.style.backgroundColor = "#fb6c6c";
      break;
    case "Agua":
      card.style.backgroundColor = "#76bdfe";
      break;
    case "Planta":
      card.style.backgroundColor = "#48d0b0";
      break;
    default:
      card.style.backgroundColor = "#f2f2f2";
  }
}
