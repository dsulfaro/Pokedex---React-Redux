import React from 'react';
import { RECEIVE_ALL_POKEMON,
         REQUEST_ALL_POKEMON,
         REQUEST_A_POKEMON,
         RECEIVE_A_POKEMON,
         RECEIVE_NEW_POKEMON,
         RECEIVE_POKEMON_ERRORS } from '../actions/pokemon_actions';

const LoadingReducer = (state = false, action) => {
  switch (action.type[2]) {
    case "C":
      return false;
    case "Q":
      return true;
    default:
      return true;
  }
};

export default LoadingReducer;
