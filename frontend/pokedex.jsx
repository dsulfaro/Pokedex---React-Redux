import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon, fetchAPokemon, createPokemon } from './util/api_util';
import { requestAllPokemon, receiveAllPokemon, receiveNewPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root.jsx';

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
window.fetchAPokemon = fetchAPokemon;

window.createPokemon = createPokemon;

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();
    window.store = store;
    ReactDOM.render(<Root store={store}/>, rootEl);
    // store.dispatch(requestAllPokemon()); // for testing
});
