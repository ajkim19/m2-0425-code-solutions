import { Pokemon } from './App';

type Prop = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Prop) {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
