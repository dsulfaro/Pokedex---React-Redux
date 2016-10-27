import React from 'react';
import { RECEIVE_A_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_A_POKEMON:
      return action.pokemonDetail;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
