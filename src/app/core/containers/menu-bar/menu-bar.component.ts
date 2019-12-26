import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import {
  AppState,
  SwitchPage,
  ResetActionTokens,
  AddTokensToAgenda,
  IncreaseResourceToken,
  AddOneCardToHand,
  RevealEncounterCard,
  ReadyCards,
} from '../../../store';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Select(AppState.isGameInProgress) isGameInProgress$: Observable<boolean>;
  @Select(AppState.campaignName) campaignName$: Observable<string>;
  @Select(AppState.scenarioName) scenarioName$: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit() {}

  onClick() {
    this.store.dispatch(new SwitchPage({ commandId: 'switchPage', id: 'selCampaign' }));
  }

  onAddDoomTokenOnAgenda() {
    this.store.dispatch(new AddTokensToAgenda(1));
  }

  onResetActionTokens() {
    this.store.dispatch(new ResetActionTokens());
  }

  onIncreaseResourceToken() {
    this.store.dispatch(new IncreaseResourceToken(1));
  }

  onAddOneCardToHand() {
    this.store.dispatch(new AddOneCardToHand());
  }

  onRevealEncounterCard() {
    this.store.dispatch(new RevealEncounterCard());
  }

  onReadyCards() {
    this.store.dispatch(new ReadyCards());
  }
}
