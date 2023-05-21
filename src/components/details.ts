import { ApiPokemon } from '../data/api.pokemon';
import { Pokemon, PokemonData } from '../model/pokemon';
import { Component } from './component';

export class Details extends Component {
  pokemon!: Pokemon[];
  repository: ApiPokemon;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiPokemon();
    this.handleLoadEach();
  }

  async handleLoadEach() {}

  async createTemplate() {
    const list = this.pokemon
      .map(
        (item) => `
          <li>
            <p class="name">${item.name.toUpperCase()}</p>
            <a href="${
              item.url
            }"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif" alt="${
          item.name
        }-picture" width=110 height=100></a>
          </li>`
      )
      .join('');

    return `
      <ul>${list}</ul>
      `;
  }
}
