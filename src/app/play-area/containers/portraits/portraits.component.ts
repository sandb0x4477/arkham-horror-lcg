import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';

@Component({
  selector: 'app-portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.scss'],
})
export class PortraitsComponent implements OnInit {
  @Input() investigators: Card[];
  @Input() locations: Card[];
  @Input() currentLocation: string;
  @Output() command = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onCommand(commandId: string, cardId: string) {
    const payload = {
      commandId,
      cardId,
    };
    this.command.emit(payload);
  }

  getInvsAtLocation() {
    return this.investigators.filter((c: Card) => c.current_location === this.currentLocation);
  }

  getLocationsIds() {
    const tempArr = [];
    this.locations.forEach((el: Card) => {
      tempArr.push(el.id);
    });
    return tempArr;
  }

  onCdkDrop(event: CdkDragDrop<string[]>) {
    console.log('this.currentLocation => ', this.currentLocation);
    const payload = {
      commandId: 'cdkDrop',
      event,
      extraData: this.currentLocation,
    };
    this.command.emit(payload);
  }

  getInvestigators(locId: string) {
    return this.investigators.filter((c: Card) => c.current_location === this.currentLocation);
  }

  getPortraitImage(invId: string) {
    // console.log('id => ', invId);
    const code = this.investigators.find((c: Card) => c.id === invId).code;
    return `/assets/portraits/${code}.jpg`;
  }
}
