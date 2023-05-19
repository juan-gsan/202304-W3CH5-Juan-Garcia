import { Pokemon } from '../model/pokemon';

export class ApiPokemon {
  // Picture: string;
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
    // This.picture = '';
  }

  async getAll() {
    const response = await fetch(this.url);
    return response.json();
  }

  async get(id: Pokemon['id']) {
    const response = await fetch(this.url + id);
    return response.json();
  }

  async create(pokemon: Partial<Pokemon>) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }

  async update(id: Pokemon['id'], pokemon: Partial<Pokemon>) {
    const response = await fetch(this.url + id, {
      method: 'PATCH',
      body: JSON.stringify(pokemon),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }

  async delete(id: Pokemon['id']) {
    const response = await fetch(this.url + id, {
      method: 'DELETE',
    });
    return response.ok;
  }
}
