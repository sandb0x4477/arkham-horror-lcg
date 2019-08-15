import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { StateReset } from 'ngxs-reset-plugin';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import difference from 'lodash.difference';
import random from 'lodash.random';
import shuffle from 'lodash.shuffle';
import samplesize from 'lodash.samplesize';

import { CardsDbService } from './cards-db.service';
import { Card } from '../../shared/models/card.model';
import { SetIntroText, SwitchPage } from '../store/settings.actions';
import { SetPlayStatus } from '../../core/store/app.actions';
import { SettingsStateModel } from '../store/settings.state';
import { ScenarioData } from '../../shared/models/scenario.data.model';
import { ArkhamState } from '../../play-area/store/arkham.state';
import { Scenarios } from '../../shared/data/scenarios.data';
import { LocationExits, Tokens } from '../../shared/data/location.exits';
import { Observable, of } from 'rxjs';
import { LocationSwitch, PopulateDeck } from '../../play-area/store/arkham.actions';

@Injectable()
export class ScenarioService {
  constructor(private store: Store, private cardsDbService: CardsDbService, private router: Router) {}

  settings: SettingsStateModel;
  selScenario: ScenarioData;
  scenarioId: number;
  startingLocation: string;

  setUpGame() {
    this.store.dispatch([new SetPlayStatus(false)]);
    this.store.dispatch(new StateReset(ArkhamState)).subscribe(res => {
      this.settings = res.settings;
      this.selScenario = this.settings.selScenario;
      this.scenarioId = this.settings.selScenario.id;
      switch (this.selScenario.id) {
        case 0:
          this.setUpScenario_0();
          break;
        // case 1:
        //   this.setUpScenario_1();
        //   break;
        // case 2:
        //   this.setUpScenario_2();
        //   break;

        default:
          break;
      }
    });
    this.store.dispatch([new SetPlayStatus(true)]);
    // this.router.navigate(['/play']);
    // this.store.dispatch(new SwitchPage({ commandId: 'switchPage', id: 'start' }));
  }

  setUpScenario_0() {
    const locations = this.selScenario.locationCards;
    const encounter0Deck = this.selScenario.encounterDeck;
    const threat0Outofplay = this.selScenario.outOfPlay0;
    const threat1Outofplay = this.selScenario.outOfPlay1;
    const agendaDeck = this.selScenario.agendaCards;
    const actDeck = this.selScenario.actCards;
    const investigators = this.settings.selInvs;
    const hand0Deck = this.retriveHandDeckCodes(this.settings.deckLists[0]);
    const hand1Deck = this.retriveHandDeckCodes(this.settings.deckLists[1]);
    const query = locations.concat(
      encounter0Deck,
      threat0Outofplay,
      threat1Outofplay,
      agendaDeck,
      actDeck,
      investigators,
      hand0Deck,
      hand1Deck,
    );
    this.cardsDbService.getCardsFromDb(query).subscribe(response => {
      console.log('response => ', response);
      this.fillDeck(locations, response, 'locations', false, false, 'locations');
      this.fillDeck(encounter0Deck, response, 'encounter0Deck', false, true);
      this.fillDeck(threat0Outofplay, response, 'threat0Outofplay', false);
      this.fillDeck(threat1Outofplay, response, 'threat1Outofplay', false);
      this.store.dispatch([
        new SetIntroText(this.selScenario.description[0]),
        // new SwitchPage({ commandId: 'switchPage', id: 'selCampaign' }),
      ]);
    });
  }

  fillDeck(
    codes: string[],
    cards: Card[],
    deckId: string,
    faceUp: boolean = false,
    randomize: boolean = false,
    flag: string = null,
  ) {
    let tempArr = [];
    codes.forEach(code => {
      let payload = {};
      const card = cards.find(c => c.code === code);
      payload = {
        ...card,
        id: uuid(),
        faceUp,
        tokens: Tokens,
      };

      if (flag === 'locations' || card.type_code === 'location') {
        const exits = LocationExits.find(loc => loc.code === code);
        payload = {
          ...payload,
          exits: exits.exits,
          exits_faceUp: exits.exits_faceUp,
          location_marker: exits.location_marker,
          location_marker_faceUp: exits.location_marker_faceUp,
        };
      }
      tempArr.push(payload);
    });

    if (flag === 'locations') {
      this.startingLocation = tempArr[0].id;
      this.store.dispatch(new LocationSwitch(this.startingLocation));
    }

    if (randomize) {
      tempArr = shuffle(tempArr);
    }

    const payload = {
      deckId,
      deck: tempArr,
    };
    this.store.dispatch(new PopulateDeck(payload));
  }

  retriveHandDeckCodes(cards: Card[]) {
    const codes = [];
    cards.forEach(card => {
      for (let i = 0; i < card.qtyInDeck; i++) {
        if (card.code === '01000') {
          const basicWeaknessLength = this.selScenario.basicWeakness.length;
          const randomWeaknessCode = this.selScenario.basicWeakness[random(0, basicWeaknessLength - 1)];
          codes.push(randomWeaknessCode);
        } else {
          codes.push(card.code);
        }
      }
    });
    return shuffle(codes);
  }
}
