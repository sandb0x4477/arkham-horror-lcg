import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';
import { SingleDeckConfig, SpreadDeckConfig } from '../../../shared/data/settings';

@Component({
  selector: 'app-hand0',
  templateUrl: './hand0.component.html',
  styleUrls: ['./hand0.component.scss'],
})
export class Hand0Component implements OnInit {
  @Input() navBarsStatus: any;
  @Input() hand0Deck: Card[];
  @Input() hand0Hand: Card[];
  @Input() hand0Discard: Card[];
  @Input() hand0Spare: Card[];
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
