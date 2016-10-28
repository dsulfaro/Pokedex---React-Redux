import React from 'react';
import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';


const mapStateToProps = state => {
  return { pokemon: selectAllPokemon(state), loading: state.loading };
};
// const mapDispatchToProps = () => ({})

export default connect(mapStateToProps)(PokemonIndex);
