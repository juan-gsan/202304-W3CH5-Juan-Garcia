export class ApiPokemon {
  // Picture: string;
  pokeUrl: string;
  serverUrl: string;
  constructor() {
    this.pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    this.serverUrl = 'http://localhost:3000/pokemon';
    // This.picture = '';
  }

  async getAll() {
    const response = await fetch(this.pokeUrl);
    const pokeList = await response.json();
    return pokeList.results;
  }

  async getEach() {
    const response = await fetch(this.pokeUrl);
    const pokeList = await response.json();
    const pokeDataContainer = await Promise.all(
      pokeList.results.map(async (pokemon) => {
        const eachUrl = pokemon.url;
        const response = await fetch(eachUrl);
        const pokeData = await response.json();
        return pokeData;
      })
    );
    return pokeDataContainer;
  }
}
// Async get(id: Pokemon['id']) {
//   const response = await fetch(this.pokeUrl + id);
//   return response.json();
// }

// Async create(pokemon: Partial<Pokemon>) {
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
