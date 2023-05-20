import { Component } from './component';
import { Pokemon } from '../model/pokemon';
import { ApiPokemon } from '../data/api.pokemon';

export class Card extends Component {
  pokemon!: Pokemon[];
  repository: ApiPokemon;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiPokemon();
    this.handleLoadEach();
  }

  async handleLoadEach() {
    this.pokemon = await this.repository.getEach();
    console.log(this.repository);
    console.log(this.pokemon);
    this.template = await this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon
      .map(
        (item) => `
          <li>
            <p class="name">${item.name.toUpperCase()}</p>
            <a href="${
              item.url
            }"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
          item.url.split('/')[6]
        }.gif" alt="${item.name}-picture" width=100 height=100></a>
          </li>`
      )
      .join('');

    return `
      <ul>${list}</ul>
      `;
  }
}
