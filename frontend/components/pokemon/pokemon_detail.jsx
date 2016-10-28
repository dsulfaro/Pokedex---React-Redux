import React from 'react';
import { Link } from 'react-router';

const PokemonDetail = ({pokemonDetail, children, loading}) => {
  // const moveList = pokemonDetail.moves.join(", ");
  if (loading){
    return (<div className="loader">Loading...</div>);
  }
  else {
    return (
      <section className="poke-detail">
        <ul>
          <img className="poke-detail-image" src={pokemonDetail.image_url} />
          <li><h2>{pokemonDetail.name}</h2></li>
          <li>Type: {pokemonDetail.poke_type}</li>
          <li>Atack: {pokemonDetail.attack}</li>
          <li>Defense: {pokemonDetail.defense}</li>
          <li>Moves: {pokemonDetail.moves.join(", ")}</li>
          <h4>Items:</h4>
          <ul className="items">
            {pokemonDetail.items ? pokemonDetail.items.map((item, item_idx) => (
              <li key={item.id}><Link to={`/pokemon/${pokemonDetail.id}/item/${item_idx}`}><img src={item.image_url}/></Link></li>
            )) : ""}
          </ul>
        </ul>
        {children}
      </section>
    );
  }

};

export default PokemonDetail;
