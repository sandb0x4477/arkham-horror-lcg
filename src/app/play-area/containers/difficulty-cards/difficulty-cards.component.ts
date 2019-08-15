import { Component, OnInit, Input } from '@angular/core';

import { ScenarioData } from '../../../shared/models/scenario.data.model';

@Component({
  selector: 'app-difficulty-cards',
  templateUrl: './difficulty-cards.component.html',
  styleUrls: ['./difficulty-cards.component.scss']
})
export class DifficultyCardsComponent implements OnInit {
  @Input() scenario: ScenarioData;

  constructor() { }

  ngOnInit() {
  }

  get card() {
    if (!this.scenario.hasOwnProperty('answers')) {
      return '';
    } else {
      const code = this.scenario.difficultyCards[this.scenario.answers.difficulty];
      return `/assets/cards/${code}.jpg`;
    }
  }

}
