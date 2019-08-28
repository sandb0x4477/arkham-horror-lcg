import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import orderBy from 'lodash.orderby';

import {
  SwitchCampaign,
  SwitchScenario,
  SwitchPage,
  SelectInvestigator,
  ClearError,
  SetLoading,
  PopulateDeckList,
  SetError,
} from '../../../store';
import { CardsDbService } from '../../../shared/services/cards-db.service';
import { SettingsState } from '../../../store';
import { ScenarioData } from '../../../shared/models/scenario.data.model';
import { Card } from '../../../shared/models/card.model';
import { StarterDecks } from '../../../shared/data/starter-decks.data';
import { ScenarioService } from '../../../shared/services/scenario.service';
import { AlertifyService } from '../../../shared/services/alertify.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  constructor(
    private store: Store,
    private cardsDbService: CardsDbService,
    private scenarioService: ScenarioService,
    private alertify: AlertifyService,
  ) {}

  @Select(SettingsState.loading) loading$: Observable<boolean>;
  @Select(SettingsState.currentPage) currentPage$: Observable<string>;
  @Select(SettingsState.selCampaign) selCampaign$: Observable<number>;
  @Select(SettingsState.selScenario) selScenario$: Observable<ScenarioData>;
  @Select(SettingsState.selInvs) selInvs$: Observable<Array<string>>;
  @Select(SettingsState.deckLists) deckLists$: Observable<Array<Card[]>>;
  @Select(SettingsState.errors) errors$: Observable<Array<any>>;
  @Select(SettingsState.introText) introText$: Observable<string>;

  ngOnInit() {}

  fetchStarterDeck(code: string, id: number) {
    let deckList = [];
    this.store.dispatch([new ClearError({ id })]);
    const deck = StarterDecks.find((d: any) => d.investigator_code === code);
    const slots = deck.slots;
    this.cardsDbService.getCardsFromDb(this.extractSlots(deck)).subscribe(
      (cards: Card[]) => {
        deckList = this.orderList(cards, slots);
        const payload = {
          deckList,
          id,
        };
        this.store.dispatch([new PopulateDeckList(payload)]);
      },
      error => {
        const payload = {
          id,
          error,
        };
        this.store.dispatch([new SetError(payload)]);
      },
    );
  }

  fetchPublicDeck(code: string, id: number) {
    let deckList = [];
    let slots = {};
    this.store.dispatch([new ClearError({ id }), new SetLoading(true)]);
    let investigator = '';
    this.cardsDbService
      .getPublicDeck(code)
      .pipe(
        tap(res => {
          slots = res.slots;
          investigator = res.investigator_code;
        }),
        switchMap(response => this.cardsDbService.getCardsFromDb(this.extractSlots(response))),
      )
      .subscribe(
        (cards: Card[]) => {
          deckList = this.orderList(cards, slots);
          const payload = {
            deckList,
            id,
          };
          this.store.dispatch([
            new SetLoading(false),
            new SelectInvestigator({ code: investigator, id }),
            new PopulateDeckList(payload),
          ]);
        },
        error => {
          const payload = {
            id,
            error,
          };
          this.alertify.error(`Error loading Deck ${code}!`);
          this.store.dispatch([new SetLoading(false), new SetError(payload)]);
        },
        () => {
          this.alertify.success(`Deck Id: ${code} loaded successfully...`);
        },
      );
  }

  onCommand(payload: any) {
    console.log('onCommand payload => ', payload);
    switch (payload.commandId) {
      case 'switchCampaign':
        this.store.dispatch(new SwitchCampaign(payload));
        break;

      case 'switchScenario':
        this.store.dispatch(new SwitchScenario(payload));
        break;

      case 'switchPage':
        if (payload.id === 'start') {
          this.store.dispatch([new SwitchPage(payload)]);
          this.scenarioService.setUpGame();
        } else if (payload.id === 'play') {
          // this.router
          // this.store.dispatch(new SwitchPage(payload));
        } else {
          this.store.dispatch(new SwitchPage(payload));
        }
        break;

      case 'fetchPublicDeck':
        this.fetchPublicDeck(payload.value, payload.id);
        break;

      case 'selectInv':
        this.fetchStarterDeck(payload.code, payload.id);
        this.store.dispatch(new SelectInvestigator(payload));
        break;
    }
  }

  orderList(arr: Card[], slots: any): Card[] {
    let tempArr = [];
    for (const [key, value] of Object.entries(slots)) {
      const card: Card = arr.find(c => c.code === key);
      tempArr.push({ ...card, qtyInDeck: value });
    }
    tempArr = orderBy(tempArr, ['faction_code', 'name'], ['asc', 'asc']);
    return tempArr;
  }

  extractSlots(response: any) {
    const query = [];
    for (const [key] of Object.entries(response.slots)) {
      query.push(key);
    }
    return query;
  }
}
