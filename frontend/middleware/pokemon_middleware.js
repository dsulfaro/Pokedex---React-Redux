import { fetchAllPokemon, fetchAPokemon, createPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
        receiveAllPokemon,
        REQUEST_A_POKEMON,
        receiveAPokemon,
        receiveNewPokemon,
        CREATE_POKEMON,
        receivePokemonErrors
       } from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {

  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveAPokemonSuccess = data => dispatch(receiveAPokemon(data));
  const receiveANewPokemon = data => {
    dispatch(receiveNewPokemon(data));
    hashHistory.push(`/pokemon/${data.id}`);
  };

  const receiveAnError = error => {
    dispatch(receivePokemonErrors(error.responseJSON));
  };

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_A_POKEMON:
      fetchAPokemon(action.pokemon, receiveAPokemonSuccess);
      return next(action);
    case CREATE_POKEMON:
      createPokemon(action.pokemon, receiveANewPokemon, receiveAnError);
      return next(action);
    default:
      return next(action);
  }
};


export default PokemonMiddleware;
