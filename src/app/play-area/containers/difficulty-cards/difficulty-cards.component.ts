import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-difficulty-cards',
  templateUrl: './difficulty-cards.component.html',
  styleUrls: ['./difficulty-cards.component.scss']
})
export class DifficultyCardsComponent implements OnInit {
  @Input() difficultyCard: string;

  constructor() { }

  ngOnInit() {
  }

  get card() {
      return `/assets/cards/${this.difficultyCard}.jpg`;
  }
}
