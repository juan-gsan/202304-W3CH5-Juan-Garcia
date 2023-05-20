import { Pokemon } from '../model/pokemon';

export class ApiPokemon {
  // Picture: string;
  pokeUrl: string;
  serverUrl: string;
  constructor() {
    this.pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    this.serverUrl = 'http://localhost:3000/pokemon';
    // This.picture = '';
  }

  getAll() {
    fetch(this.pokeUrl)
      .then((response) => response.json())
      .then((pokeList) => pokeList);
  }

  getEach() {
    fetch(this.pokeUrl)
      .then((response) => response.json())
      .then((pokeList) => {
        console.log(pokeList);
        pokeList.results.forEach((pokemon) => {
          const eachUrl = pokemon.url;
          console.log(eachUrl);
          fetch(eachUrl)
            .then((response) => response.json())
            .then((pokeInfo) => {
              console.log(pokeInfo);
            });
        });
      });
  }

  // FetchPokemonData(pokemon) {
  //   const url = pokemon; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((pokeData) => {
  //       console.log(pokeData);
  //     });
}

// Async getAll() {
//   const response = await fetch(this.pokeUrl);
//   console.log(response);
//   return response.json();
// }

// async get(id: Pokemon['id']) {
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
