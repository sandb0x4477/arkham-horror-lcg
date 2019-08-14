import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';
import { SingleDeckConfig, SpreadDeckConfig } from '../../../shared/data/settings';

@Component({
  selector: 'app-hand1',
  templateUrl: './hand1.component.html',
  styleUrls: ['./hand1.component.scss'],
})
export class Hand1Component implements OnInit {
  @Input() navBarsStatus: any;
  @Input() hand1Deck: Card[];
  @Input() hand1Hand: Card[];
  @Input() hand1Discard: Card[];
  @Input() hand1Spare: Card[];
  @Output() command = new EventEmitter<any>();

  singleDeckConfig = SingleDeckConfig;
  spreadDeckConfig = SpreadDeckConfig;

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
