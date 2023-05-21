import { Component } from './component';
import { PokemonData } from '../model/pokemon';
import { ApiPokemon } from '../data/api.pokemon';

export class Card extends Component {
  pokemon!: PokemonData[];
  repository: ApiPokemon;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiPokemon();
    this.handleLoadEach();
  }

  render() {
    super.cleanHtml();
    this.template = this.createTemplate();
    super.render();
  }

  async handleLoadEach() {
    this.pokemon = await this.repository.getEach();
    this.render();
  }

  createTemplate() {
    console.log(this.pokemon);
    const pokeList = this.pokemon
      .map(
        (pokemon) => `
          <li>
            <p class="id">#${pokemon.id}</p>
            <p class="name">${pokemon.name.toUpperCase()}</p>
            <a href="${pokemon.species.url}"><img src="${
          pokemon.sprites.front_default
        }" alt="${pokemon.name}-picture" width=150 height=150></a>
          </li>`
      )
      .join('');
    return `
      <ul>${pokeList}</ul>
      <div class="buttons">
        <button class="left"><i class="fa-solid fa-arrow-left"></i></button>
        <button class="right"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      `;
  }
}
