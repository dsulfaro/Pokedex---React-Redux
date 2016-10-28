import React from 'react';
import { connect } from 'react-redux';
import {createAPokemon} from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapStateToProps = state => {
  return { errors: state.errors };
};

const mapDispatchToProps = dispatch => ({
  createPokemon: (pokemon) => dispatch(createAPokemon(pokemon))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
