import {createStore,applyMiddleware} from 'redux';
import RootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
  return createStore(
    RootReducer,
    applyMiddleware(thunk)
  );
}
