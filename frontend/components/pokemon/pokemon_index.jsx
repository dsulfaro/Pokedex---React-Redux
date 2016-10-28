import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Link } from 'react-router';

const PokemonIndex = ({pokemon, children, loading}) => {

  if (loading) {
    return <div className="loader">Loading...</div>;
  }
  else {
    return (
      <div className="main">
        <h3 className="create-link"><Link to="/">CREATE A POKEMON</Link></h3>
        <ul className="pokemon-index">
          { pokemon.map((poketmon) => (
            <PokemonIndexItem key={poketmon.id} pokemon={poketmon} />
          ))}
        </ul>
        {children}
      </div>
    );
  }
};

export default PokemonIndex;
