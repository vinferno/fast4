import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(
    private api: ApiService,
  ) { }
  getPokemon(next: string = '') {
    console.log('pokemon service called')
    return this.api.get(next);
  }
}
