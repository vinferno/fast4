import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionLoadNextPokemon, actionLoadPokemon, actionLoadPreviousPokemon } from 'src/app/actions/pokemon.actions';
import { State } from 'src/app/reducers';
import { selectPokemonCount, selectPokemonList, selectPokemonNext, selectPokemonPrevious } from 'src/app/selectors/pokemon.selectors';

@Component({
  selector: 'app-page-pokemon',
  templateUrl: './page-pokemon.component.html',
  styleUrls: ['./page-pokemon.component.scss']
})
export class PagePokemonComponent implements OnInit {

  pokemonCount$ = this.store.select(selectPokemonCount);
  pokemonList$ = this.store.select(selectPokemonList);
  pokemonNext$ = this.store.select(selectPokemonNext);
  pokemonPrevious$ = this.store.select(selectPokemonPrevious);
  constructor(
    private store: Store<State>
  ) {
    this.store.dispatch(actionLoadPokemon())
  }

  ngOnInit(): void {

  }

  loadNext(next: string) {
    this.store.dispatch(actionLoadNextPokemon({next}))
  }

  loadPrevious(previous: string) {
    this.store.dispatch(actionLoadPreviousPokemon({previous}))
  }

}
