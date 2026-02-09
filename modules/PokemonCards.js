export default class PokemonCard {
  constructor(pokemons) {
    this.pokemons = pokemons;
    this.currentIndex = 0;

    //DOM
    this.nameElement = null;
    this.idElement = null;
    this.typeElement = null;
    this.hpElement = null;
    this.attackElement = null;
    this.defenseElement = null;
    this.imageElement = null;

    this.cardElement = null;
    this.typeColors = {
      Fuego: "#fb6c6c",
      Agua: "#76bdfe",
      Planta: "#48d0b0",
    };

    this.prevBtn = null;
    this.nextBtn = null;
  }

  // Initializer for components/objects (DOMContentLoaded)

  init() {
    // Cache DOM elements

    this.nameElement = document.getElementById("pokemon-name");
    this.idElement = document.getElementById("pokemon-id");
    this.typeElement = document.getElementById("pokemon-type");
    this.hpElement = document.getElementById("pokemon-hp");
    this.attackElement = document.getElementById("pokemon-attack");
    this.defenseElement = document.getElementById("pokemon-defense");
    this.imageElement = document.getElementById("pokemon-image");

    this.cardElement = document.getElementById("card");

    this.prevBtn = document.getElementById("prev-btn");
    this.nextBtn = document.getElementById("next-btn");

    // DOM validations
    const elements = [
      this.nameElement,
      this.idElement,
      this.typeElement,
      this.hpElement,
      this.attackElement,
      this.defenseElement,
      this.imageElement,
      this.cardElement,
      this.prevBtn,
      this.nextBtn,
    ];

    for (let i = 0; i < elements.length; i++) {
      if (!elements[i]) {
        console.error(`PokemonCard: Element missing from pokemon index - ${i}`);
        return;
      }
    }

    // Event listeners
    this.prevBtn.addEventListener("click", () => this.prevPokemon());
    this.nextBtn.addEventListener("click", () => this.nextPokemon());

    //render
    this.updateCard();
  }

  changeIndex(step) {
    this.currentIndex += step;

    if (this.currentIndex >= this.pokemons.length) {
      this.currentIndex = 0;
    }

    if (this.currentIndex < 0) {
      this.currentIndex = this.pokemons.length - 1;
    }

    this.updateCard();
  }

  nextPokemon() {
    this.changeIndex(1);
  }

  prevPokemon() {
    this.changeIndex(-1);
  }

  updateCard() {
    const pokemon = this.pokemons[this.currentIndex];

    this.nameElement.textContent = pokemon.name;
    this.idElement.textContent = `#${pokemon.id}`;
    this.typeElement.textContent = pokemon.type;
    this.imageElement.src = pokemon.image;

    const stats = [
      { element: this.hpElement, value: pokemon.hp },
      { element: this.attackElement, value: pokemon.attack },
      { element: this.defenseElement, value: pokemon.defense },
    ];

    for (let i = 0; i < stats.length; i++) {
      stats[i].element.textContent = stats[i].value;
    }

    this.updateCardColor(pokemon.type);
  }

  updateCardColor(type) {
    const color = this.typeColors[type] || "#f2f2f2";
    this.typeElement.style.backgroundColor = color;
  }
}
