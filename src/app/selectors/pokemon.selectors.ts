import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemon from '../reducers/pokemon.reducer';

const selectPokemonFeature = createFeatureSelector<fromPokemon.State>(fromPokemon.pokemonFeatureKey);

export const selectPokemonCount = createSelector(
  selectPokemonFeature,
  state => state.count
);

export const selectPokemonList = createSelector(
  selectPokemonFeature,
  state => state.results
);

export const selectPokemonNext = createSelector(
  selectPokemonFeature,
  state => state.next
);

export const selectPokemonPrevious = createSelector(
  selectPokemonFeature,
  state => state.previous
);


console.log('selectPokemonFeature', selectPokemonFeature);
