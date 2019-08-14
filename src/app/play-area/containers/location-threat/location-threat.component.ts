import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';
import { SpreadDeckConfig } from '../../../shared/data/settings';

@Component({
  selector: 'app-location-threat',
  templateUrl: './location-threat.component.html',
  styleUrls: ['./location-threat.component.scss'],
})
export class LocationThreatComponent implements OnInit {
  @Input() locationThreat: Card[];
  @Input() currentLocation: string;
  @Output() command = new EventEmitter<any>();

  spreadDeckConfig = SpreadDeckConfig;

  constructor() {}

  ngOnInit() {}

  getThreats() {
    return this.locationThreat.filter((c: Card) => c.current_location === this.currentLocation);
  }

  onCommand(payload: any) {
    this.command.emit(payload);
  }

  onCdkDrop(event: CdkDragDrop<string[]>) {
    // console.log('this.currentLocation => ', this.currentLocation);
    const payload = {
      commandId: 'cdkDrop',
      event,
      extraData: this.currentLocation
    };
    this.command.emit(payload);
  }
}
