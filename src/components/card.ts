/* eslint-disable no-new */
import { Component } from './component';
import { PokemonData } from '../model/pokemon';
import { ApiPokemon } from '../data/api.pokemon';
import { Navigation } from './navigation';

export class Card extends Component {
  pokemon!: PokemonData[][];
  repository: ApiPokemon;

  offset!: number;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiPokemon();
    this.offset = 0;
    new Navigation('main');
    this.handleEventListeners();
    this.handleLoadEach();
  }

  render() {
    super.cleanHtml();
    this.template = this.createTemplate();
    super.render();
  }

  handleEventListeners() {
    document
      .querySelectorAll('button')
      .forEach((item) =>
        item.addEventListener('click', this.handleTurnPage.bind(this))
      );
  }

  async handleLoadEach() {
    this.pokemon = await this.repository.getEach();
    this.render();
  }

  async handleTurnPage(event: Event) {
    const element = (await event.target) as HTMLElement;
    const id = (await element.dataset.id) as string;

    if (id === 'next') {
      if (this.offset >= 1281) return;
      this.offset += 1;
      this.handleLoadEach();
    }

    if (id === 'previous') {
      if (this.offset <= 0) return;
      this.offset -= 1;
      this.handleLoadEach();
    }
  }

  createTemplate() {
    const pokeList = this.pokemon.map((pokemonPage) =>
      pokemonPage.map(
        (pokemon) => `
          <li>
            <p class="id">#${pokemon.id}</p>
            <p class="name">${pokemon.name.toUpperCase()}</p>
            <a class="details" href="${pokemon.species.url}"><img src="${
          pokemon.sprites.front_default
        }" alt="${pokemon.name}-picture" width=150 height=150></a>
            <div class="types">
              <span class="type"><img src="./img/${
                pokemon.types[0].type.name
              }.png" alt="${
          pokemon.types[0].type.name
        }-picture" width=64 height=32></span>
            </div>
          </li>`
      )
    );
    return `
      <ul>${pokeList[this.offset].join('')}</ul>
      `;
  }
}
