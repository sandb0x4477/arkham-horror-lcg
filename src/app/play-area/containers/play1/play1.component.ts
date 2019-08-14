import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';
import { SingleDeckConfig, SpreadDeckConfig } from '../../../shared/data/settings';

@Component({
  selector: 'app-play1',
  templateUrl: './play1.component.html',
  styleUrls: ['./play1.component.scss']
})
export class Play1Component implements OnInit {
  @Input() navBarsStatus: any;
  @Input() play1Inplay: Card[];
  @Input() play1Discard: Card[];
  @Input() play1Victory: Card[];
  @Input() play1Spare: Card[];
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
