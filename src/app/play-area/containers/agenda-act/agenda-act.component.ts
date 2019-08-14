import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Card } from '../../../shared/models/card.model';
import { AgendaCardConfig, ActCardConfig } from '../../../shared/data/settings';

@Component({
  selector: 'app-agenda-act',
  templateUrl: './agenda-act.component.html',
  styleUrls: ['./agenda-act.component.scss']
})
export class AgendaActComponent implements OnInit {
  @Input() agendaDeck: Card[];
  @Input() actDeck: Card[];
  @Output() command = new EventEmitter<any>();

  cardProps = {
    className: 'card-arkham-horizontal',
  };

  agendaCardConfig = AgendaCardConfig;
  actCardConfig = ActCardConfig;

  constructor() { }

  ngOnInit() {
  }

  onCommand(payload: any) {
    this.command.emit(payload);
  }
}
