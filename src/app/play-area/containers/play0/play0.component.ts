import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';
import { SingleDeckConfig, SpreadDeckConfig } from '../../../shared/data/settings';

@Component({
  selector: 'app-play0',
  templateUrl: './play0.component.html',
  styleUrls: ['./play0.component.scss']
})
export class Play0Component implements OnInit {
  @Input() navBarsStatus: any;
  @Input() play0Inplay: Card[];
  @Input() play0Discard: Card[];
  @Input() play0Victory: Card[];
  @Input() play0Spare: Card[];
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
