import React from 'react';

const PokemonDetail = ({pokemonDetail, children}) => {
  // const moveList = pokemonDetail.moves.join(", ");
  if (Object.keys(pokemonDetail) == 0){
    return (<div>Loading</div>);
  }
  else {
    return (
      <section>
        <ul>
          <img src={pokemonDetail.image_url} />
          <li><h2>{pokemonDetail.name}</h2></li>
          <li>Type: {pokemonDetail.type}</li>
          <li>Atack: {pokemonDetail.attack}</li>
          <li>Defense: {pokemonDetail.defense}</li>
          <li>Moves: {pokemonDetail.moves}</li>
          <ul>Items:
            {pokemonDetail.items ? pokemonDetail.items.map(item => (
              <li key={item.id}><img src={item.image_url}/></li>
            )) : ""}
          </ul>
        </ul>
        {children}
      </section>
    );
  }

};

export default PokemonDetail;
