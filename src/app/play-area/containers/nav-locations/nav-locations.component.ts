import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';
import { LocationCardConfig } from '../../../shared/data/settings';

@Component({
  selector: 'app-nav-locations',
  templateUrl: './nav-locations.component.html',
  styleUrls: ['./nav-locations.component.scss'],
})
export class NavLocationsComponent implements OnInit {
  @Input() locationThreat: Card[];
  @Input() currentLocation: string;
  @Input() locations: Card[];
  @Input() investigators: Card[];
  @Output() command = new EventEmitter<any>();

  locationCardConfig = LocationCardConfig;

  constructor() {}

  ngOnInit() {}

  onCommand(event: any) {
    this.command.emit(event);
  }

  onCdkDrop(event: CdkDragDrop<string[]>, locId: string) {
    const payload = {
      commandId: 'cdkDropOnLocNav',
      locationId: event.container.id,
      cardId: event.item.data,
      sourceId: event.previousContainer.id,
    };
    this.command.emit(payload);
  }

  onLocationNavClick(locationId: string) {
    const payload = {
      commandId: 'locationNavSwitch',
      locationId,
    };
    this.command.emit(payload);
  }

  isExit(loc: Card) {
    let idx: number;
    const exits = this.getExits();
    // console.log('exits => ', exits);
    if (loc.faceUp && loc.location_marker_faceUp !== null) {
      idx = exits.indexOf(loc.location_marker_faceUp);
    } else {
      idx = exits.indexOf(loc.location_marker);
    }
    // console.log('idx => ', idx);
    if (idx !== -1) {
      return true;
    } else {
      return false;
    }
  }

  getThreats(locId: string) {
    return this.locationThreat.filter((c: Card) => c.current_location === locId).length;
  }

  getNumberOfInvs(locId: string) {
    return this.investigators.filter((c: Card) => c.current_location === locId);
  }

  getPortraitImage(invId: string) {
    const code = this.investigators.find((c: Card) => c.id === invId).code;
    return `/assets/portraits/${code}.jpg`;
  }

  getLocationCard() {
    return this.locations.find((c: Card) => c.id === this.currentLocation) || null;
  }

  getCurrentLocation() {
    return this.locations.find((c: Card) => c.id === this.currentLocation);
  }

  getExits() {
    const currentLocationCard = this.locations.find((c: Card) => c.id === this.currentLocation);
    if (currentLocationCard.faceUp && currentLocationCard.exits_faceUp !== null) {
      return currentLocationCard.exits_faceUp;
    } else {
      return currentLocationCard.exits;
    }
  }

  getCssForLocationExits(marker: string) {
    return `location-symbol ${marker}`;
  }

  getCss(marker: string, card: Card) {
    if (card.faceUp) {
      if (card.location_marker_faceUp !== null) {
        return `location-symbol ${card.location_marker_faceUp}`;
      }
    }
    return `location-symbol ${marker}`;
  }
}
