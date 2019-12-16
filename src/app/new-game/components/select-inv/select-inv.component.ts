import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

import { InvestigatorsList } from '../../../shared/data/settings';

@Component({
  selector: 'app-select-inv',
  templateUrl: './select-inv.component.html',
  styleUrls: ['./select-inv.component.scss'],
})
export class SelectInvComponent implements OnInit, OnChanges {
  @Input() id: number;
  @Input() selInvs: string[];
  @Output() command = new EventEmitter<any>();
  invsList = InvestigatorsList;
  invsListSet: string[] = [];

  constructor() {}

  ngOnInit() {
    this.getInvsListSet(0);
    this.switchToPage(this.selInvs[this.id]);
    this.command.emit({ commandId: 'selectInv', code: this.selInvs[this.id], id: this.id });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selInvs) {
      this.switchToPage(this.selInvs[this.id]);
    }
  }

  getInvsListSet(from: number) {
    this.invsListSet = this.invsList.slice(from, from + 5);
  }

  changePage(dir: string, id: number) {
    const currentSet = this.invsListSet;
    const indexOfFirst = this.invsList.findIndex(code => code === currentSet[0]);
    if (dir === 'scrollRight') {
      this.getInvsListSet(indexOfFirst + 5);
    } else {
      this.getInvsListSet(indexOfFirst - 5);
    }
  }

  switchToPage(code: string) {
    const currentSet = this.invsListSet;
    if (currentSet.findIndex(i => i === code) !== -1) {
      return;
    }
    const portraitIndex = this.invsList.findIndex(i => i === code);
    this.getInvsListSet(Math.floor(portraitIndex / 5) * 5);
  }

  onCommand(payload: any) {
    switch (payload.commandId) {
      case 'selectInv':
        this.command.emit(payload);
        break;
      case 'scrollRight':
        this.changePage('scrollRight', payload.id);
        break;
      case 'scrollLeft':
        this.changePage('scrollLeft', payload.id);
        break;
      case 'fetchStarterDeck':
        console.log('fetchStarterDeck => ', payload);
        // this.command.emit(payload);
        break;
      case 'fetchPublicDeck':
        console.log('fetchPublicDeck => ', payload);
        this.command.emit(payload);
        break;
    }
  }

  get buttontext() {
    return this.id === 0 ? 'Next' : 'Next';
  }

  get nextPage() {
    return this.id === 0 ? 'selInv1' : 'start';
  }

  get previousPage() {
    return this.id === 0 ? 'selScenario' : 'selInv0';
  }

  get title() {
    return this.id === 0 ? 'Lead' : 'Second';
  }

  onBack(commandId: string, id: any, data: any = null) {
    const payload = {
      commandId,
      id,
      data,
    };
    this.command.emit(payload);
  }

  onNext(commandId: string, id: any, data: any = null) {
    const payload = {
      commandId,
      id,
      data,
    };
    this.command.emit(payload);
  }
}
