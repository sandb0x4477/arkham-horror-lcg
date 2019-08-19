import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { SwitchPage } from '../../../new-game/store/settings.actions';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @Select(AppState.isGameInProgress) isGameInProgress$: Observable<boolean>;
  @Select(AppState.campaignName) campaignName$: Observable<string>;
  @Select(AppState.scenarioName) scenarioName$: Observable<string>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onClick() {
    this.store.dispatch(new SwitchPage({ commandId: 'switchPage', id: 'selCampaign' }));
  }

}
