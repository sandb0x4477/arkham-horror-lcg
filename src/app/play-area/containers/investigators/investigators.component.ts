import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../../../shared/models/card.model';

@Component({
  selector: 'app-investigators',
  templateUrl: './investigators.component.html',
  styleUrls: ['./investigators.component.scss']
})
export class InvestigatorsComponent implements OnInit {
  @Input() investigators: Card[];
  @Output() command = new EventEmitter<any>();

  cardProps = {
    className: 'card-arkham-horizontal',
    top: 30,
    right: 3,
    exhaust: true,
    flipDeck: true,
    shuffleDeck: true,
    chevrons: true
  };

  constructor() { }

  ngOnInit() {
  }

  onCommand(payload: any) {
    this.command.emit(payload);
  }

}
