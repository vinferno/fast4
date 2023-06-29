import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-label-pokemon',
  templateUrl: './label-pokemon.component.html',
  styleUrls: ['./label-pokemon.component.scss']
})
export class LabelPokemonComponent implements OnInit {
  @Input() pokemon!: { name: string, url: string };
  @Output() pokemonChosen = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  chosePokemon() {
    this.pokemonChosen.emit(this.pokemon.name);
  }

}


