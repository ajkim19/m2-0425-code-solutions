import { Pokemon } from './App';

type Prop = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Prop) {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li id={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
