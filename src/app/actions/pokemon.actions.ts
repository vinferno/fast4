import { createAction, props } from '@ngrx/store';


export const actionLoadPokemon = createAction(
  '[Pokemon] Load Pokemon'
);

export const actionSetPokemon = createAction(
  '[Pokemon] Set Pokemon',
  props<{ pokemon: any }>()
);

export const actionLoadNextPokemon = createAction(
  '[Pokemon] Load Next Pokemon',
  props<{ next: string }>()
);
export const actionLoadPreviousPokemon = createAction(
  '[Pokemon] Load Previous Pokemon',
  props<{ previous: string }>()
);



