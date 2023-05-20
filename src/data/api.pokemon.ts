import { Pokemon } from '../model/pokemon';

export class ApiPokemon {
  // Picture: string;
  pokeUrl: string;
  serverUrl: string;
  constructor() {
    // This.id = generateId();
    this.pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
    this.serverUrl = 'http://localhost:3000/pokemon';
    // This.picture = '';
  }

  async getAll() {
    const response = await fetch(this.pokeUrl);
    return response.json();
  }

  // TEMP async get(id: Pokemon['id']) {
  //   const response = await fetch(this.url + id);
  //   return response.json();
  // }

  // async create(pokemon: Partial<Pokemon>) {
  //   const response = await fetch(this.url, {
  //     method: 'POST',
  //     body: JSON.stringify(pokemon),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  //   return response.json();
  // }

  // async update(id: Pokemon['id'], pokemon: Partial<Pokemon>) {
  //   const response = await fetch(this.url + id, {
  //     method: 'PATCH',
  //     body: JSON.stringify(pokemon),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  //   return response.json();
  // }

  // async delete(id: Pokemon['id']) {
  //   const response = await fetch(this.url + id, {
  //     method: 'DELETE',
  //   });
  //   return response.ok;
  // }
}
