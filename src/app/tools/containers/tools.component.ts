import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { ToolsState, SetActiveTab } from '../../store';
import { ArkhamState } from '../../store';
import { CardsDbService } from '../../shared/services/cards-db.service';
import { Card } from '../../shared/models/card.model';
import { ScenarioService } from '../../shared/services/scenario.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  constructor(private store: Store, private cardsDbService: CardsDbService, private scenarioService: ScenarioService) {}
  searchReasult: Card[];

  @Select(ToolsState.activeTab) activeTab$: Observable<string>;
  @Select(ArkhamState.chaosBag) chaosBag$: Observable<number[]>;

  ngOnInit() {}

  onTabSwitch(payload: string) {
    this.store.dispatch(new SetActiveTab(payload));
  }

  onAddCard(card: Card) {
    console.log('card => ', card);
    this.scenarioService.addExtraCard(card);
  }

  onQuery(payload: any) {
    console.log('payload => ', payload);
    this.cardsDbService.getCardsFromQuery(payload.query).subscribe(res => {
      console.log(res);
      this.searchReasult = res;
    });
  }
}
