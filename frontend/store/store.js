import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';


const predefinedState = {
  pokemon: {},
  pokemonDetail: {},
  errors: [],
  loading: true
};
const configureStore = () => (
  createStore(
    RootReducer,
    predefinedState,
    MasterMiddleware
  )
);

export default configureStore;
