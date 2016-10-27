import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({pokemon, children}) => {

  return (
    <div>
      <ul>
        { pokemon.map((poketmon) => (
          <PokemonIndexItem key={poketmon.id} pokemon={poketmon} />
        ))}
      </ul>
      {children}
    </div>
  );
};

export default PokemonIndex;
