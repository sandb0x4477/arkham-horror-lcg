import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';
import { SingleDeckConfig } from '../../../shared/data/settings';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss'],
})
export class EncounterComponent implements OnInit {
  @Input() navBarsStatus: any;
  @Input() encounter0Deck: Card[];
  @Input() encounter0Discard: Card[];
  @Output() command = new EventEmitter<any>();

  singleDeckConfig = SingleDeckConfig;

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
