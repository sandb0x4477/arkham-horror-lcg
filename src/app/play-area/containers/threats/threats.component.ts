import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';
import { SingleDeckConfig, SpreadDeckConfig } from '../../../shared/data/settings';

@Component({
  selector: 'app-threats',
  templateUrl: './threats.component.html',
  styleUrls: ['./threats.component.scss'],
})
export class ThreatsComponent implements OnInit {
  @Input() navBarsStatus: any;
  @Input() threat0Threats: Card[];
  @Input() threat0Outofplay: Card[];
  @Input() threat1Threats: Card[];
  @Input() threat1Outofplay: Card[];
  @Output() command = new EventEmitter<any>();

  singleDeckConfig = SingleDeckConfig;
  spreadDeckConfig = SpreadDeckConfig;

  cardProps = {
    className: 'card-arkham-vertical',
    top: 14,
    right: 4,
    exhaust: false,
    flipDeck: false,
    shuffleDeck: false,
    chevrons: true
  };

  constructor() {}

  ngOnInit() {}

  onCommand(payload: any) {
    this.command.emit(payload);
  }

  onCdkDrop(event: CdkDragDrop<string[]>) {
    const payload = {
      commandId: 'cdkDrop',
      event
    };
    this.command.emit(payload);
  }
}
