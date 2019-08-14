import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

import { Card } from '../../../shared/models/card.model';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
})
export class DeckListComponent implements OnInit, OnChanges {
  @Input() deckList: Array<Card[]>;
  @Input() id: number;
  @Input() selectedInvs: string[];
  @Output() command = new EventEmitter<any>();
  selectedPreviewCard: string;

  constructor() {}

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.deckList) {
      this.selectedPreviewCard = null;
    }
  }

  selectedCard(code: string) {
    this.selectedPreviewCard = code;
  }
}
