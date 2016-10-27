import { fetchAllPokemon, fetchAPokemon, createPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
        receiveAllPokemon,
        REQUEST_A_POKEMON,
        receiveAPokemon,
        receiveNewPokemon,
        CREATE_POKEMON
       } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {

  const receiveAllPokemonSuccess = data => (dispatch(receiveAllPokemon(data)));
  const receiveAPokemonSuccess = data => dispatch(receiveAPokemon(data));
  const receiveANewPokemon = date => dispatch(receiveNewPokemon);

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_A_POKEMON:
      fetchAPokemon(action.pokemon, receiveAPokemonSuccess);
      return next(action);
    case CREATE_POKEMON:
      createPokemon(action.pokemon, receiveANewPokemon);
      return next(action);
    default:
      return next(action);
  }
};


export default PokemonMiddleware;
