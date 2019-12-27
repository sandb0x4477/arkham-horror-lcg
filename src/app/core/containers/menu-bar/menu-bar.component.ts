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
  ProgressState,
  ProgressStateModel,
  ShowProgressCard,
  NextPhase,
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
  @Select(AppState.isPlayPage) isPlayPage$: Observable<boolean>;
  @Select(ProgressState.getState) progressState$: Observable<ProgressStateModel>;

  constructor(private store: Store) {}

  ngOnInit() {}

  onCommand(event: string) {
    console.log('event => ', event);
    switch (event) {
      case 'placeDoom':
        console.log('Executing placeDoom');
        this.store.dispatch(new AddTokensToAgenda(1));
        break;
      case 'revealEncounterCard':
        console.log('Executing revealEncounterCard');
        this.store.dispatch(new RevealEncounterCard());
        break;
      case 'nextPhase':
        this.store.dispatch(new NextPhase());
        break;
      case 'resetActionTokens':
        this.store.dispatch(new ResetActionTokens());
        break;
      case 'increaseResourceToken':
        this.store.dispatch([new IncreaseResourceToken(1), new AddOneCardToHand()]);
        break;
      case 'readyCards':
        this.store.dispatch(new ReadyCards());
        break;
    }
  }

  onClick() {
    this.store.dispatch(new SwitchPage({ commandId: 'switchPage', id: 'selCampaign' }));
  }

  onShowProgressCard() {
    this.store.dispatch(new ShowProgressCard());
  }
}
