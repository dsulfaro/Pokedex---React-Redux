import React from 'react';
import { RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_NEW_POKEMON:
      let newPokemon = { [action.pokemon.id]: action.pokemon  };
      return merge({}, state, newPokemon );
    default:
      return state;
  }
};

export default PokemonReducer;
