export type Pokemon = {
  name: string;
  picture: string;
  url: string;
};

export interface PokemonData {
  id: number;
  name: string;
  species: { name: string; url: string };
  sprites: { front_default: string };
  types: [{ type: string; url: string }, { type: string; url: string }];
}
