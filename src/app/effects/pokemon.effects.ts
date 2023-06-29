import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { actionLoadPokemon, actionSetPokemon, actionLoadNextPokemon, actionLoadPreviousPokemon } from '../actions/pokemon.actions';
import { PokemonService } from '../services/pokemon.service';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Injectable()
export class PokemonEffects {


  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService

    ) {}


    loadPokemon$ = createEffect(() => this.actions$.pipe(
      ofType(actionLoadPokemon),
      mergeMap(() => this.pokemonService.getPokemon()
        .pipe(
          map((pokemon: any) => (actionSetPokemon({ pokemon }))),
          catchError(() => EMPTY)
        ))
      )
    );

    loadNextPokemon$ = createEffect(() => this.actions$.pipe(
      ofType(actionLoadNextPokemon),
      mergeMap((
        action: { next: string }
      ) => this.pokemonService.getPokemon(action.next)
        .pipe(
          map((pokemon: any) => (actionSetPokemon({ pokemon }))),
          catchError(() => EMPTY)
        ))
      )
    );

    loadPreviousPokemon$ = createEffect(() => this.actions$.pipe(
      ofType(actionLoadPreviousPokemon),
      mergeMap((
        action: { previous: string }
      ) => this.pokemonService.getPokemon(action.previous)
        .pipe(
          map((pokemon: any) => (actionSetPokemon({ pokemon }))),
          catchError(() => EMPTY)
        ))
      )
    );






}
