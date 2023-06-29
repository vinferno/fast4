import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePokemonComponent } from './page-pokemon/page-pokemon.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from '../../effects/pokemon.effects';
import { LabelPokemonComponent } from './components/label-pokemon/label-pokemon.component';
import { LabelPokemonInfoComponent } from './components/label-pokemon-info/label-pokemon-info.component';



@NgModule({
  declarations: [
    PagePokemonComponent,
    LabelPokemonComponent,
    LabelPokemonInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PagePokemonComponent }
    ]),
    EffectsModule.forFeature([PokemonEffects]),
  ]
})
export class PokemonModule { }
