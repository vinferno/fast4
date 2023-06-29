import { Action, createReducer, on } from '@ngrx/store';
import { actionSetPokemon } from '../actions/pokemon.actions';


export const pokemonFeatureKey = 'pokemon';

export interface State {
  count: number;
  results : any[];
  next: string;
  previous: string;
}

export const initialState: State = {
  count: 0,
  results: [],
  next: '',
  previous: ''
};

export const reducer = createReducer(
  initialState,
  on(
    actionSetPokemon,
    (state, action) => ({
      ...state,
      count: action.pokemon.count,
      results: action.pokemon.results,
      next: action.pokemon.next?.slice(action.pokemon.next.indexOf('mon/') + 4),
      previous: action.pokemon.previous?.slice(action.pokemon.previous.indexOf('mon/') + 4),
    })
  )
);
