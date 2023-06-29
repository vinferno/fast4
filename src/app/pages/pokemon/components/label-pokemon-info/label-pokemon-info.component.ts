import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-pokemon-info',
  templateUrl: './label-pokemon-info.component.html',
  styleUrls: ['./label-pokemon-info.component.scss']
})
export class LabelPokemonInfoComponent implements OnInit {
  @Input() count: number| null = 0;
  @Input() next: string | null= '';
  @Input() previous: string | null= '';
  constructor() { }

  ngOnInit(): void {
  }

}
