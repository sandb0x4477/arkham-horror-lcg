import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

import { Card } from '../../../shared/models/card.model';

@Component({
  selector: 'app-card-arkham',
  templateUrl: './card-arkham.component.html',
  styleUrls: ['./card-arkham.component.scss'],
})
export class CardArkhamComponent {
  @Input() card: Card;
  @Input() cardProps: any;
  @Output() command = new EventEmitter<any>();

  constructor() {
  }

  onCommand(commandId: string, cardId: any) {
    const payload = {
      commandId,
      cardId,
    };
    this.command.emit(payload);
  }

  onTokenDrop(event: any) {
    const rect = event.event.target.getBoundingClientRect();
    const payload = {
      commandId: 'addToken',
      tokenId: event.data,
      cardId: event.event.target.id,
      posXRelative: event.event.x - rect.left,
      posYRelative: event.event.y - rect.top,
    };
    this.command.emit(payload);
  }

  onTokenMove(event: CdkDragEnd, cardId: string) {
    // console.log('event => ', event);
    const payload = {
      commandId: 'moveToken',
      tokenId: event.source.data.tokenId,
      cardId,
      distanceX: event.distance.x,
      distanceY: event.distance.y,
    };
    this.command.emit(payload);
  }

  onTokenRemove(tokenId: string, cardId: string) {
    const payload = {
      commandId: 'removeToken',
      tokenId,
      cardId,
    };
    this.command.emit(payload);
  }

  onTokenIncrease(tokenId: string, cardId: string) {
    const payload = {
      commandId: 'increaseToken',
      tokenId,
      cardId,
    };
    this.command.emit(payload);
  }

  getCardClassName(className: string) {
    return `.${className}`;
  }

  getTokenClass(token: any) {
    return `token ${token.tokenId}`;
  }
}
