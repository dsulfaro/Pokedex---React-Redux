import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { requestAllPokemon, requestAPokemon } from '../actions/pokemon_actions';
import  PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './item/item_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';


const Root = ({store})=> {

  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const requestSinglePokemon = (nextState) => {
    store.dispatch(requestAPokemon(nextState.params.id));
  };

  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path = "/"
        component={PokemonIndexContainer}
        onEnter={requestOnEnter}>
        <IndexRoute component={PokemonFormContainer} />
        <Route path = "pokemon/:id" component={PokemonDetailContainer}
            onEnter={requestSinglePokemon}>
          <Route path = "item/:itemId" component={ItemDetailContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
