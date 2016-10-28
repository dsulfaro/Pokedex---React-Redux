import React from 'react';
import {withRouter} from 'react-router';

const PokemonIndexItem = ({router, pokemon}) => {

  const handleClick = url => e => router.push(url);

  return (
    <li
      className="pokemon-index-item"
      onClick={handleClick(`/pokemon/${pokemon.id}`)}>
      <h3>{pokemon.name}</h3><img src={pokemon.image_url}/></li>
  );

};

export default withRouter(PokemonIndexItem);
