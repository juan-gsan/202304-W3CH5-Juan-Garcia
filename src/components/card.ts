import { Component } from './component';
import { Pokemon } from '../model/pokemon';
import { ApiPokemon } from '../data/api.pokemon';

export class Card extends Component {
  pokemon!: Pokemon[];
  repository: ApiPokemon;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    console.log(this.pokemon);
    this.repository = new ApiPokemon();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemon = await this.repository.getAll();
    console.log(this.pokemon);
    console.log(this.pokemon.results);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon.results
      .map(
        (item) => `
          <li>
            <p>${item.name.toUpperCase()}</p>
            <p><a href="${item.url}">Details</a></p>
          </li>`
      )
      .join('');

    return `
      <ul>${list}</ul>
      `;
  }
}
