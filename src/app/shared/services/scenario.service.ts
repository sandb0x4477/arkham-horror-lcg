import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import difference from 'lodash.difference';
import random from 'lodash.random';
import shuffle from 'lodash.shuffle';
import samplesize from 'lodash.samplesize';

import { CardsDbService } from './cards-db.service';
import { Card } from '../models/card.model';
import { SetIntroText, SetMenuBarInfo, AddExtraCard } from '../../store';
import { SetPlayStatus } from '../../store';
import { SettingsStateModel } from '../../store';
import { ScenarioData } from '../models/scenario.data.model';
import { LocationExits, Tokens, TokensInv } from '../data/location.exits';
import {
  LocationSwitch,
  PopulateDeck,
  SetDifficultyCard,
  SetChaosBag,
  SpawnAcolteOnSouthSide,
  ResetArkhamState,
  AddTokensToAgenda,
} from '../../store';
import { AlertifyService } from './alertify.service';

@Injectable({ providedIn: 'root' })
export class ScenarioService {
  constructor(
    private store: Store,
    private cardsDbService: CardsDbService,
    private router: Router,
    private alertify: AlertifyService,
  ) {}

  settings: SettingsStateModel;
  selScenario: ScenarioData;
  scenarioId: number;
  startingLocation: string;

  setUpGame() {
    this.store.dispatch([new SetPlayStatus(false)]);
    this.store.dispatch(new ResetArkhamState()).subscribe(res => {
      console.log('res => ', res);
      this.settings = res.settings;
      this.selScenario = this.settings.selScenario;
      this.scenarioId = this.settings.selScenario.id;
      switch (this.selScenario.id) {
        case 0:
          this.setUpScenario_0();
          break;
        case 1:
          this.setUpScenario_1();
          break;
        case 2:
          this.setUpScenario_2();
          break;
        case 3:
          this.setUpScenario_3();
          break;
        case 4:
          this.setUpScenario_4();
          break;
        case 5:
          this.setUpScenario_5();
          break;

        default:
          break;
      }
    });
    this.store.dispatch([new SetPlayStatus(true)]);
    this.store.dispatch(
      new SetMenuBarInfo({
        campaignName: this.selScenario.campaign,
        scenarioName: this.selScenario.encounter_name,
      }),
    );
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
    const hand0Hand = hand0Deck.splice(0, 5);
    const hand1Hand = hand1Deck.splice(0, 5);
    const difficultyCard = this.selScenario.difficultyCards[this.selScenario.answers.difficulty];
    const chaosBag = this.selScenario.chaosBagTokens[this.selScenario.answers.difficulty];
    const query = locations.concat(
      encounter0Deck,
      threat0Outofplay,
      threat1Outofplay,
      agendaDeck,
      actDeck,
      investigators,
      hand0Deck,
      hand1Deck,
      hand0Hand,
      hand1Hand,
    );
    this.cardsDbService.getCardsFromDb(query).subscribe(response => {
      // console.log('response => ', response);
      this.fillDeck(locations, response, 'locations', false, false, 'locations');
      this.fillDeck(encounter0Deck, response, 'encounter0Deck', false, true);
      this.fillDeck(agendaDeck, response, 'agendaDeck', true);
      this.fillDeck(actDeck, response, 'actDeck', true);
      this.fillDeck(threat0Outofplay, response, 'threat0Outofplay', false);
      this.fillDeck(threat1Outofplay, response, 'threat1Outofplay', false);
      this.fillDeck(investigators, response, 'investigators', true);
      this.fillDeck(hand0Deck, response, 'hand0Deck', false);
      this.fillDeck(hand1Deck, response, 'hand1Deck', false);
      this.fillDeck(hand0Hand, response, 'hand0Hand', true);
      this.fillDeck(hand1Hand, response, 'hand1Hand', true);
      this.store.dispatch([
        new SetIntroText(this.selScenario.description[0]),
        new SetDifficultyCard(difficultyCard),
        new SetChaosBag(chaosBag),
      ]);
    });
  }

  setUpScenario_1() {
    const southSideRandom = this.selScenario.locationCards[random(2, 3)];
    const downTownRandom = this.selScenario.locationCards[random(6, 7)];
    const locations = difference(this.selScenario.locationCards, [southSideRandom, downTownRandom]);
    let encounter0Deck = this.selScenario.encounterDeck;
    let textInfo: string;

    // * House still standing?
    if (this.selScenario.answers.housestanding === false) {
      locations.splice(0, 1);
    }

    // * Ghoul Priest Alive?
    if (this.selScenario.answers.ghoulpriest === true) {
      encounter0Deck = [...this.selScenario.encounterDeck, '01116'];
    }

    if (this.selScenario.answers.housestanding && this.selScenario.answers.ghoulpriest) {
      textInfo = this.selScenario.description[0];
    } else {
      textInfo = this.selScenario.description[1];
    }

    const threat0Outofplay = this.selScenario.outOfPlay0;
    const threat1Outofplay = this.selScenario.outOfPlay1;
    const agendaDeck = this.selScenario.agendaCards;
    const actDeck = this.selScenario.actCards;
    const investigators = this.settings.selInvs;
    const hand0Deck = this.retriveHandDeckCodes(this.settings.deckLists[0]);
    const hand1Deck = this.retriveHandDeckCodes(this.settings.deckLists[1]);
    const hand0Hand = hand0Deck.splice(0, 5);
    const hand1Hand = hand1Deck.splice(0, 5);
    const hiddenDeck = this.selScenario.hiddenDeck;
    const difficultyCard = this.selScenario.difficultyCards[this.selScenario.answers.difficulty];
    const chaosBag = this.selScenario.chaosBagTokens[this.selScenario.answers.difficulty];
    const extraCards = this.selScenario.extraCards;
    const query = locations.concat(
      encounter0Deck,
      threat0Outofplay,
      threat1Outofplay,
      agendaDeck,
      actDeck,
      investigators,
      hand0Deck,
      hand1Deck,
      hand0Hand,
      hand1Hand,
      hiddenDeck,
      extraCards,
    );
    this.cardsDbService.getCardsFromDb(query).subscribe(response => {
      // console.log('response => ', response);
      this.fillDeck(locations, response, 'locations', false, false, 'locations');
      this.fillDeck(encounter0Deck, response, 'encounter0Deck', false, true);
      this.fillDeck(agendaDeck, response, 'agendaDeck', true);
      this.fillDeck(actDeck, response, 'actDeck', true);
      this.fillDeck(threat0Outofplay, response, 'threat0Outofplay', false, true);
      this.fillDeck(threat1Outofplay, response, 'threat1Outofplay', false);
      this.fillDeck(investigators, response, 'investigators', true);
      this.fillDeck(hand0Deck, response, 'hand0Deck', false);
      this.fillDeck(hand1Deck, response, 'hand1Deck', false);
      this.fillDeck(hand0Hand, response, 'hand0Hand', true);
      this.fillDeck(hand1Hand, response, 'hand1Hand', true);
      this.fillDeck(hiddenDeck, response, 'hiddenDeck', true);
      this.store.dispatch([
        new SetIntroText(textInfo),
        new SetDifficultyCard(difficultyCard),
        new SetChaosBag(chaosBag),
        new SpawnAcolteOnSouthSide(),
      ]);
    });
  }

  setUpScenario_2() {
    const difficultyCard = this.selScenario.difficultyCards[this.selScenario.answers.difficulty];
    const chaosBag = this.selScenario.chaosBagTokens[this.selScenario.answers.difficulty];
    const agendaDeck = this.selScenario.agendaCards;
    const actDeck = this.selScenario.actCards;
    const investigators = this.settings.selInvs;
    const hand0Deck = this.retriveHandDeckCodes(this.settings.deckLists[0]);
    const hand1Deck = this.retriveHandDeckCodes(this.settings.deckLists[1]);
    const hand0Hand = hand0Deck.splice(0, 5);
    const hand1Hand = hand1Deck.splice(0, 5);
    const threat0Outofplay = this.selScenario.outOfPlay0;
    const threat1Outofplay = this.selScenario.outOfPlay1;
    let hand0Discard = [];
    let hand1Discard = [];
    // * Remove 2 Arkham woods
    const arkhamWoodsCards = this.selScenario.locationCards.slice(1);
    const locations = [this.selScenario.locationCards[0], ...samplesize(arkhamWoodsCards, 4)];

    // * Select Agents
    const agentsCodes = this.selScenario.otherCards[random(3)];

    // * Ghoul Priest Alive?
    const encounter0Deck = this.selScenario.answers.ghoulpriest
      ? [...this.selScenario.encounterDeck, ...agentsCodes, '01116']
      : [...this.selScenario.encounterDeck, ...agentsCodes];

    // ? Cutltists that got away
    const howManyTokens = Math.ceil(this.selScenario.answers.escapedcultists / 2);
    console.log('howManyTokens => ', howManyTokens);
    // console.log('this.firstAgenda => ', this.firstAgenda);

    // ? It is past midnight
    if (this.selScenario.answers.pastmidnight) {
      hand0Discard = hand0Hand.splice(0, 2);
      hand1Discard = hand1Hand.splice(0, 2);
    }

    const query = locations.concat(
      encounter0Deck,
      agendaDeck,
      actDeck,
      investigators,
      hand0Deck,
      hand1Deck,
      hand0Hand,
      hand1Hand,
      threat0Outofplay,
      threat1Outofplay,
      hand0Discard,
      hand1Discard,
    );

    this.cardsDbService.getCardsFromDb(query).subscribe(response => {
      // console.log('response => ', response);
      this.fillDeck(locations, response, 'locations', false, false, 'locations');
      this.fillDeck(encounter0Deck, response, 'encounter0Deck', false, true);
      this.fillDeck(agendaDeck, response, 'agendaDeck', true);
      this.fillDeck(actDeck, response, 'actDeck', true);
      this.fillDeck(investigators, response, 'investigators', true);
      this.fillDeck(hand0Deck, response, 'hand0Deck', false);
      this.fillDeck(hand1Deck, response, 'hand1Deck', false);
      this.fillDeck(hand0Hand, response, 'hand0Hand', true);
      this.fillDeck(hand1Hand, response, 'hand1Hand', true);
      this.fillDeck(hand0Discard, response, 'hand0Discard', true);
      this.fillDeck(hand1Discard, response, 'hand1Discard', true);
      this.fillDeck(threat0Outofplay, response, 'threat0Outofplay', true);
      this.fillDeck(threat1Outofplay, response, 'threat1Outofplay', false);
      this.store.dispatch([
        new SetIntroText(this.selScenario.description[0]),
        new SetDifficultyCard(difficultyCard),
        new SetChaosBag(chaosBag),
        new AddTokensToAgenda(howManyTokens),
      ]);
    });
  }

  // ---------------------------------------------------------------------------
  // ! Extracurricular Activity
  // ---------------------------------------------------------------------------
  setUpScenario_3() {
    const locations = this.selScenario.locationCards;
    const encounter0Deck = this.selScenario.encounterDeck;
    const threat0Outofplay = this.selScenario.outOfPlay0;
    const threat1Outofplay = this.selScenario.outOfPlay1;
    const agendaDeck = this.selScenario.agendaCards;
    const actDeck = this.selScenario.actCards;
    const investigators = this.settings.selInvs;
    const hand0Deck = this.retriveHandDeckCodes(this.settings.deckLists[0]);
    const hand1Deck = this.retriveHandDeckCodes(this.settings.deckLists[1]);
    const hand0Hand = hand0Deck.splice(0, 5);
    const hand1Hand = hand1Deck.splice(0, 5);
    const difficultyCard = this.selScenario.difficultyCards[this.selScenario.answers.difficulty];
    const chaosBag = this.selScenario.chaosBagTokens[this.selScenario.answers.difficulty];
    const query = locations.concat(
      encounter0Deck,
      threat0Outofplay,
      threat1Outofplay,
      agendaDeck,
      actDeck,
      investigators,
      hand0Deck,
      hand1Deck,
      hand0Hand,
      hand1Hand,
    );
    this.cardsDbService.getCardsFromDb(query).subscribe(response => {
      console.log('response => ', JSON.stringify(response, null, 2));
      this.fillDeck(locations, response, 'locations', false, false, 'locations');
      this.fillDeck(encounter0Deck, response, 'encounter0Deck', false, true);
      this.fillDeck(agendaDeck, response, 'agendaDeck', true);
      this.fillDeck(actDeck, response, 'actDeck', true);
      this.fillDeck(threat0Outofplay, response, 'threat0Outofplay', false);
      this.fillDeck(threat1Outofplay, response, 'threat1Outofplay', false);
      this.fillDeck(investigators, response, 'investigators', true);
      this.fillDeck(hand0Deck, response, 'hand0Deck', false);
      this.fillDeck(hand1Deck, response, 'hand1Deck', false);
      this.fillDeck(hand0Hand, response, 'hand0Hand', true);
      this.fillDeck(hand1Hand, response, 'hand1Hand', true);
      this.store.dispatch([
        new SetIntroText(this.selScenario.description[0]),
        new SetDifficultyCard(difficultyCard),
        new SetChaosBag(chaosBag),
      ]);
    });
  }
  // ---------------------------------------------------------------------------
  // ! The House Always Wins
  // ---------------------------------------------------------------------------
  setUpScenario_4() {
    const locations = this.selScenario.locationCards;
    const encounter0Deck = this.selScenario.encounterDeck;
    const threat0Outofplay = this.selScenario.outOfPlay0;
    const threat1Outofplay = this.selScenario.outOfPlay1;
    const agendaDeck = this.selScenario.agendaCards;
    const actDeck = this.selScenario.actCards;
    const investigators = this.settings.selInvs;
    const hand0Deck = this.retriveHandDeckCodes(this.settings.deckLists[0]);
    const hand1Deck = this.retriveHandDeckCodes(this.settings.deckLists[1]);
    const hand0Hand = hand0Deck.splice(0, 5);
    const hand1Hand = hand1Deck.splice(0, 5);
    const difficultyCard = this.selScenario.difficultyCards[this.selScenario.answers.difficulty];
    const chaosBag = this.selScenario.chaosBagTokens[this.selScenario.answers.difficulty];
    const query = locations.concat(
      encounter0Deck,
      threat0Outofplay,
      threat1Outofplay,
      agendaDeck,
      actDeck,
      investigators,
      hand0Deck,
      hand1Deck,
      hand0Hand,
      hand1Hand,
    );
    this.cardsDbService.getCardsFromDb(query).subscribe(response => {
      console.log('response => ', JSON.stringify(response, null, 2));
      this.fillDeck(locations, response, 'locations', false, false, 'locations');
      this.fillDeck(encounter0Deck, response, 'encounter0Deck', false, true);
      this.fillDeck(agendaDeck, response, 'agendaDeck', true);
      this.fillDeck(actDeck, response, 'actDeck', true);
      this.fillDeck(threat0Outofplay, response, 'threat0Outofplay', true);
      this.fillDeck(threat1Outofplay, response, 'threat1Outofplay', false);
      this.fillDeck(investigators, response, 'investigators', true);
      this.fillDeck(hand0Deck, response, 'hand0Deck', false);
      this.fillDeck(hand1Deck, response, 'hand1Deck', false);
      this.fillDeck(hand0Hand, response, 'hand0Hand', true);
      this.fillDeck(hand1Hand, response, 'hand1Hand', true);
      this.store.dispatch([
        new SetIntroText(this.selScenario.description[0]),
        new SetDifficultyCard(difficultyCard),
        new SetChaosBag(chaosBag),
      ]);
    });
  }

  // ---------------------------------------------------------------------------
  // ! The Miskatonic Museum
  // ---------------------------------------------------------------------------
  setUpScenario_5() {
    // setup up random
    const security = this.selScenario.locationCards[random(2, 3)];
    const adminitration = this.selScenario.locationCards[random(4, 5)];
    const locations = difference(this.selScenario.locationCards, [security, adminitration]);

    // const locations = this.selScenario.locationCards;
    const encounter0Deck = this.selScenario.encounterDeck;
    const threat0Outofplay = this.selScenario.outOfPlay0;

    const exibitHalls = this.selScenario.outOfPlay1.slice(1);
    console.log('exibitHalls => ', exibitHalls);
    // const randomRestrictedHall = random(2, 4);
    // console.log('randomRestrictedHall => ', randomRestrictedHall);
    // outOfPlay1: ['02137', '02132', '02133', '02134', '02135', '02136'],
    exibitHalls.splice(random(2, 4), 0, '02137');
    const threat1Outofplay = exibitHalls;
    console.log('threat1Outofplay => ', threat1Outofplay);

    const agendaDeck = this.selScenario.agendaCards;
    const actDeck = this.selScenario.actCards;
    const investigators = this.settings.selInvs;
    const hand0Deck = this.retriveHandDeckCodes(this.settings.deckLists[0]);
    const hand1Deck = this.retriveHandDeckCodes(this.settings.deckLists[1]);
    const hand0Hand = hand0Deck.splice(0, 5);
    const hand1Hand = hand1Deck.splice(0, 5);
    const difficultyCard = this.selScenario.difficultyCards[this.selScenario.answers.difficulty];
    const chaosBag = this.selScenario.chaosBagTokens[this.selScenario.answers.difficulty];
    const query = locations.concat(
      encounter0Deck,
      threat0Outofplay,
      threat1Outofplay,
      agendaDeck,
      actDeck,
      investigators,
      hand0Deck,
      hand1Deck,
      hand0Hand,
      hand1Hand,
    );
    this.cardsDbService.getCardsFromDb(query).subscribe(response => {
      // console.log('response => ', JSON.stringify(response, null, 2));
      this.fillDeck(locations, response, 'locations', false, false, 'locations');
      this.fillDeck(encounter0Deck, response, 'encounter0Deck', false, true);
      this.fillDeck(agendaDeck, response, 'agendaDeck', true);
      this.fillDeck(actDeck, response, 'actDeck', true);
      this.fillDeck(threat0Outofplay, response, 'threat0Outofplay', true);
      this.fillDeck(threat1Outofplay, response, 'threat1Outofplay', false);
      this.fillDeck(investigators, response, 'investigators', true);
      this.fillDeck(hand0Deck, response, 'hand0Deck', false);
      this.fillDeck(hand1Deck, response, 'hand1Deck', false);
      this.fillDeck(hand0Hand, response, 'hand0Hand', true);
      this.fillDeck(hand1Hand, response, 'hand1Hand', true);
      this.store.dispatch([
        new SetIntroText(this.selScenario.description[0]),
        new SetDifficultyCard(difficultyCard),
        new SetChaosBag(chaosBag),
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

      if (card.type_code === 'investigator') {
        payload = { ...payload, tokens: TokensInv, current_location: this.startingLocation };
      }

      if (flag === 'locations' || card.type_code === 'location') {
        const exits = LocationExits.find(loc => loc.code === code);
        console.log('exits => ', exits);
        payload = {
          ...payload,
          faceUp: false,
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

  addExtraCard(card: Card) {
    let cardToAdd = {
      ...card,
      id: uuid(),
      faceUp: true,
      tokens: Tokens,
    };

    if (card.type_code === 'location') {
      const exits = LocationExits.find(loc => loc.code === card.code);
      if (exits === undefined) {
        this.alertify.error('Unable to add this card...');
        return;
      }
      console.log('exits => ', exits);
      cardToAdd = {
        ...cardToAdd,
        faceUp: false,
        exits: exits.exits,
        exits_faceUp: exits.exits_faceUp,
        location_marker: exits.location_marker,
        location_marker_faceUp: exits.location_marker_faceUp,
      };
    }
    this.store.dispatch(new AddExtraCard(cardToAdd)).subscribe(res => {
      this.alertify.success('Card added to Out of Play...')
    });
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
