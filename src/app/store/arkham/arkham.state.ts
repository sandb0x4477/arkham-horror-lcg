import { State, Action, Selector, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import random from 'lodash.random';

import {
  PopulateDeck,
  MoveItemInArray,
  TransferArrayItem,
  AddToken,
  RemoveToken,
  ExhaustCard,
  FlipCard,
  FlipDeck,
  ShuffleDeck,
  NextCard,
  PreviousCard,
  NavBarSwitch,
  MoveToken,
  LocationSwitch,
  AddTokenOnAgenda,
  DropOnLocNav,
  RemoveCard,
  SetDifficultyCard,
  SetChaosBag,
  SpawnAcolteOnSouthSide,
  ResetArkhamState,
  AddTokensToAgenda
} from './arkham.actions';
import { Card } from '../../shared/models/card.model';
import { ArkhamStateIntial } from './initial-state';

enum Container {
  'hand0-deck' = 'hand0Deck',
  'hand0-deck-nav' = 'hand0Deck',
  'hand0-hand' = 'hand0Hand',
  'hand0-hand-nav' = 'hand0Hand',
  'hand0-discard' = 'hand0Discard',
  'hand0-discard-nav' = 'hand0Discard',
  'hand0-spare' = 'hand0Spare',
  'hand0-spare-nav' = 'hand0Spare',
  'hand1-deck' = 'hand1Deck',
  'hand1-deck-nav' = 'hand1Deck',
  'hand1-hand' = 'hand1Hand',
  'hand1-hand-nav' = 'hand1Hand',
  'hand1-discard' = 'hand1Discard',
  'hand1-discard-nav' = 'hand1Discard',
  'hand1-spare' = 'hand1Spare',
  'hand1-spare-nav' = 'hand1Spare',
  'play0-inplay' = 'play0Inplay',
  'play0-inplay-nav' = 'play0Inplay',
  'play0-discard' = 'play0Discard',
  'play0-discard-nav' = 'play0Discard',
  'play0-victory' = 'play0Victory',
  'play0-victory-nav' = 'play0Victory',
  'play0-spare' = 'play0Spare',
  'play0-spare-nav' = 'play0Spare',
  'play1-inplay' = 'play1Inplay',
  'play1-inplay-nav' = 'play1Inplay',
  'play1-discard' = 'play1Discard',
  'play1-discard-nav' = 'play1Discard',
  'play1-victory' = 'play1Victory',
  'play1-victory-nav' = 'play1Victory',
  'play1-spare' = 'play1Spare',
  'play1-spare-nav' = 'play1Spare',
  'threat0-threats' = 'threat0Threats',
  'threat0-threats-nav' = 'threat0Threats',
  'threat0-outofplay' = 'threat0Outofplay',
  'threat0-outofplay-nav' = 'threat0Outofplay',
  'threat1-threats' = 'threat1Threats',
  'threat1-threats-nav' = 'threat1Threats',
  'threat1-outofplay' = 'threat1Outofplay',
  'threat1-outofplay-nav' = 'threat1Outofplay',
  'encounter0-encounter' = 'encounter0Deck',
  'encounter0-encounter-nav' = 'encounter0Deck',
  'encounter0-discard' = 'encounter0Discard',
  'encounter0-discard-nav' = 'encounter0Discard',
  'location-threat' = 'locationThreat',
  'location-threat-nav' = 'locationThreat',
  'locations-nav' = 'locations',
  'investigators' = 'investigators',
  'portraits' = 'investigators',
  'agenda-deck' = 'agendaDeck',
  'act-deck' = 'actDeck',
  'hidden-deck' = 'hiddenDeck',
}

const searchArray = [
  'hand0-deck',
  'hand0-hand',
  'hand0-discard',
  'hand0-spare',
  'hand1-deck',
  'hand1-hand',
  'hand1-discard',
  'hand1-spare',
  'play0-inplay',
  'play0-discard',
  'play0-victory',
  'play0-spare',
  'play1-inplay',
  'play1-discard',
  'play1-victory',
  'play1-spare',
  'threat0-threats',
  'threat0-outofplay',
  'threat1-threats',
  'threat1-outofplay',
  'encounter0-encounter',
  'encounter0-discard',
  'location-threat',
  'locations-nav',
  'investigators',
  'agenda-deck',
  'act-deck',
  'hidden-deck',
];

//#region SINGLEDECKS
const singleDecks = [
  'hand0-deck',
  'hand0-deck-nav',
  // 'hand0-hand',
  // 'hand0-hand-nav',
  'hand0-discard',
  'hand0-discard-nav',
  // 'hand0-spare',
  // 'hand0-spare-nav',
  'hand1-deck',
  'hand1-deck-nav',
  // 'hand1-hand',
  // 'hand1-hand-nav',
  'hand1-discard',
  'hand1-discard-nav',
  // 'hand1-spare',
  // 'hand1-spare-nav',
  // 'play0-inplay',
  // 'play0-inplay-nav',
  'play0-discard',
  'play0-discard-nav',
  // 'play0-victory',
  // 'play0-victory-nav',
  // 'play0-spare',
  // 'play0-spare-nav',
  // 'play1-inplay',
  // 'play1-inplay-nav',
  // 'play1-discard',
  // 'play1-discard-nav',
  // 'play1-victory',
  // 'play1-victory-nav',
  // 'play1-spare',
  // 'play1-spare-nav',
  // 'threat0-threats',
  // 'threat0-threats-nav',
  'threat0-outofplay',
  'threat0-outofplay-nav',
  // 'threat1-threats',
  // 'threat1-threats-nav',
  'threat1-outofplay',
  'threat1-outofplay-nav',
  'encounter0-encounter',
  'encounter0-encounter-nav',
  'encounter0-discard',
  'encounter0-discard-nav',
];
//#endregion

export interface ArkhamStateModel {
  navBarsStatus: any;
  difficultyCard: string;
  chaosBag: number[];
  currentLocation: string;
  agendaDeck: Card[];
  actDeck: Card[];
  investigators: Card[];
  hand0Deck: Card[];
  hand0Hand: Card[];
  hand0Discard: Card[];
  hand0Spare: Card[];
  hand1Deck: Card[];
  hand1Hand: Card[];
  hand1Discard: Card[];
  hand1Spare: Card[];
  play0Inplay: Card[];
  play0Discard: Card[];
  play0Victory: Card[];
  play0Spare: Card[];
  play1Inplay: Card[];
  play1Discard: Card[];
  play1Victory: Card[];
  play1Spare: Card[];
  threat0Threats: Card[];
  threat0Outofplay: Card[];
  threat1Threats: Card[];
  threat1Outofplay: Card[];
  encounter0Deck: Card[];
  encounter0Discard: Card[];
  locationThreat: Card[];
  locations: Card[];
  hiddenDeck: Card[];
}

@State<ArkhamStateModel>({
  name: 'arkham',
  defaults: ArkhamStateIntial,
})
export class ArkhamState {
  constructor(private store: Store) {}
  //#region Selectors
  @Selector()
  public static getState(state: any): object[] {
    return state;
  }

  @Selector()
  public static chaosBag(state: ArkhamStateModel): number[] {
    return state.chaosBag;
  }

  @Selector()
  public static getCountedDecks(state: ArkhamStateModel): object {
    let result = {};
    searchArray.forEach(element => {
      const count = state[Container[element]].length;
      const payload = {
        [element]: count,
      };
      result = { ...result, ...payload };
    });
    return result;
  }
  //#endregion

  findCardInDeck(state: any, cardId: string): any {
    let result = {};
    searchArray.forEach(element => {
      const cardIdx = state[Container[element]].findIndex(i => i.id === cardId);
      if (cardIdx !== -1) {
        result = {
          deckId: element,
          cardIndex: cardIdx,
        };
      }
    });
    return result;
  }

  @Action(ResetArkhamState)
  public resetArkhamState({getState, setState}: StateContext<ArkhamStateModel>) {
    const state = getState();
    setState({
      ...state,
      ...ArkhamStateIntial
    });
  }

  @Action(AddTokensToAgenda)
  public addTokensToAgenda({getState, setState}: StateContext<ArkhamStateModel>, { payload }: AddTokensToAgenda) {
    const stateAgenda = getState().agendaDeck;
    const firstAgenda = stateAgenda[0];
    for (let i = 0; i < payload; i++) {
      const payloadToken = { cardId: firstAgenda.id, tokenId: 'doom', posXRelative: 40, posYRelative: 140 };
      this.store.dispatch(new AddToken(payloadToken));
    }
  }

  @Action(SpawnAcolteOnSouthSide)
  public SpawnAcolteOnSouthSide({ getState, patchState }: StateContext<ArkhamStateModel>, ) {
    const locationState = getState().locations;
    const hiddenDeckState = getState().hiddenDeck;
    const southSideCard = locationState.find(c => c.name === 'Southside');
    const acolyteCard = hiddenDeckState.find(c => c.code === '01169');

    const payload = {
      cardId: acolyteCard.id,
      currentIndex: 0,
      deckSourceId: 'hidden-deck',
      deckTargetId: 'location-threat',
      extraData: southSideCard.id,
      previousIndex: 2,
    };
    this.store.dispatch(new TransferArrayItem(payload));
    const payloadToken = { cardId: acolyteCard.id, tokenId: 'doom', posXRelative: 40, posYRelative: 140 };
    this.store.dispatch(new AddToken(payloadToken));
  }

  @Action(SetChaosBag)
  public setChaosBag({ patchState }: StateContext<ArkhamStateModel>, { payload }: SetChaosBag) {
    patchState({
      chaosBag: payload,
    });
  }

  @Action(SetDifficultyCard)
  public setDifficultyCards({ patchState }: StateContext<ArkhamStateModel>, { payload }: SetDifficultyCard) {
    patchState({
      difficultyCard: payload,
    });
  }

  @Action(RemoveCard)
  public RemoveCard({ getState, patchState }: StateContext<ArkhamStateModel>, { payload }: DropOnLocNav) {
    const { cardId } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);
    const card = getState().locations[cardIndex];
    const invsIndex = getState().investigators.findIndex(l => l.current_location === cardId);
    const threatIndex = getState().locationThreat.findIndex(l => l.current_location === cardId);
    if (invsIndex !== -1 || threatIndex !== -1 || getState().locations.length < 2) {
      alert('Location is not empty or its the only location!');
    } else {
      patchState({
        locations: produce(getState().locations, (draft: any) => {
          draft.splice(cardIndex, 1);
        }),
        threat1Outofplay: produce(getState().threat1Outofplay, (draft: any) => {
          draft.splice(0, 0, card);
        }),
      });
      const nextLocation = getState().locations[0].id;
      patchState({
        currentLocation: nextLocation,
      });
    }
  }

  @Action(DropOnLocNav)
  public dropOnLocNav({ getState, patchState }: StateContext<ArkhamStateModel>, { payload }: DropOnLocNav) {
    const { commandId, locationId, cardId, sourceId } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);
    const stateSource = getState()[Container[deckId]];
    const stateTarget = getState()[Container['location-threat']];
    let card = stateSource[cardIndex];
    if (sourceId === 'portraits') {
      patchState({
        [Container[deckId]]: produce(stateSource, (draft: any) => {
          draft[cardIndex].current_location = locationId;
        }),
      });
    } else if (sourceId === 'location-threat') {
      patchState({
        [Container[sourceId]]: produce(stateSource, (draft: any) => {
          draft[cardIndex].current_location = locationId;
        }),
      });
    } else if (card.type_code === 'location') {
      patchState({
        [Container[sourceId]]: produce(stateSource, (draft: any) => {
          draft.splice(cardIndex, 1);
        }),
        [Container['locations-nav']]: produce(getState()[Container['locations-nav']], (draft: any) => {
          draft.push(card);
        }),
      });
    } else {
      // console.log('Moving card to location');
      card = produce(card, (draft: any) => {
        draft.current_location = locationId;
      });
      patchState({
        [Container[sourceId]]: produce(stateSource, (draft: any) => {
          draft.splice(cardIndex, 1);
        }),
        [Container['location-threat']]: produce(stateTarget, (draft: any) => {
          draft.splice(0, 0, card);
        }),
      });
    }
  }

  @Action(LocationSwitch)
  public locationSwitch({ getState, patchState }: StateContext<ArkhamStateModel>, { payload }: LocationSwitch) {
    // const state = getState();
    patchState({
      currentLocation: payload,
    });
  }

  @Action(NavBarSwitch)
  public navBarSwitch({ getState, patchState }: StateContext<ArkhamStateModel>, { payload }: NavBarSwitch) {
    const { navItemId, navBarId } = payload;
    const state = getState();
    patchState({
      navBarsStatus: { ...state.navBarsStatus, [navBarId]: navItemId },
    });
  }

  @Action(NextCard)
  public nextCard({ getState, patchState }: StateContext<ArkhamStateModel>, { payload }: NextCard) {
    const { cardId } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);
    const deckState = getState()[Container[deckId]];
    if (deckState.length < 2) {
      return;
    }
    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        const card = draft.splice(0, 1)[0];
        draft.splice(draft.length, 0, card);
      }),
    });
  }

  @Action(PreviousCard)
  public previousCard({ getState, patchState }: StateContext<ArkhamStateModel>, { payload }: PreviousCard) {
    const { cardId } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);
    const deckState = getState()[Container[deckId]];
    if (deckState.length < 2) {
      return;
    }
    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        const card = draft.splice(draft.length - 1, 1)[0];
        draft.splice(0, 0, card);
      }),
    });
  }

  @Action(ShuffleDeck)
  public shuffleDeck({ getState, patchState, setState }: StateContext<ArkhamStateModel>, { payload }: ShuffleDeck) {
    const { cardId } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);

    const deckState = getState()[Container[deckId]];

    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        for (let i = 0; i < draft.length; i++) {
          const randomChoiceIndex = random(i, draft.length - 1);
          [draft[i], draft[randomChoiceIndex]] = [draft[randomChoiceIndex], draft[i]];
        }
      }),
    });
  }

  @Action(FlipDeck)
  public flipDeck({ getState, patchState, setState }: StateContext<ArkhamStateModel>, { payload }: FlipDeck) {
    const { cardId } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);

    const deckState = getState()[Container[deckId]];

    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        for (const c of draft) {
          c.faceUp = !c.faceUp;
        }
      }),
    });
  }

  @Action(FlipCard)
  public flipCard({ getState, patchState, setState }: StateContext<ArkhamStateModel>, { payload }: FlipCard) {
    const { cardId } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);

    const deckState = getState()[Container[deckId]];

    if (deckState[cardIndex].code === '01121' && deckState[cardIndex].faceUp) {
      console.log('Masked Hunter');
      const cardIdx = getState().hiddenDeck.findIndex(c => c.code === '01121b');
      const card = getState().hiddenDeck.find(c => c.code === '01121b');
      if (cardIdx !== -1) {
        patchState({
          hiddenDeck: produce(getState().hiddenDeck, (draft: any) => {
            draft.splice(cardIdx, 1);
          }),
          encounter0Deck: produce(getState().encounter0Deck, (draft: any) => {
            draft.splice(0, 0, card);
          }),
        });
      }
    }

    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        draft[cardIndex].faceUp = !draft[cardIndex].faceUp;
      }),
    });
  }

  @Action(ExhaustCard)
  public exhaustCard({ getState, patchState, setState }: StateContext<ArkhamStateModel>, { payload }: ExhaustCard) {
    const { cardId } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);

    const deckState = getState()[Container[deckId]];

    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        draft[cardIndex].exhausted = !draft[cardIndex].exhausted;
      }),
    });
  }

  @Action(RemoveToken)
  public removeToken({ getState, patchState, setState }: StateContext<ArkhamStateModel>, { payload }: RemoveToken) {
    const { cardId, tokenId } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);

    const deckState = getState()[Container[deckId]];
    const tokenIndex = deckState[cardIndex].tokens.findIndex(t => t.tokenId === tokenId);

    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        draft[cardIndex].tokens[tokenIndex].qty -= 1;
      }),
    });
  }

  @Action(MoveToken)
  public moveToken({ getState, patchState, setState }: StateContext<ArkhamStateModel>, { payload }: AddToken) {
    const { cardId, tokenId, distanceX, distanceY } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);
    let maxX = 150;
    let maxY = 233;
    if (deckId === 'investigators' || deckId === 'agenda-deck' || deckId === 'act-deck') {
      maxX = 233;
      maxY = 150;
    }

    const deckState = getState()[Container[deckId]];
    const tokenIndex = deckState[cardIndex].tokens.findIndex((t: any) => t.tokenId === tokenId);

    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        const currentX = draft[cardIndex].tokens[tokenIndex].x;
        const currentY = draft[cardIndex].tokens[tokenIndex].y;
        if (currentX + distanceX > maxX) {
          draft[cardIndex].tokens[tokenIndex].x = maxX;
        } else if (currentX + distanceX < 0) {
          draft[cardIndex].tokens[tokenIndex].x = 0;
        } else {
          draft[cardIndex].tokens[tokenIndex].x += distanceX;
        }

        if (currentY + distanceY > maxY) {
          draft[cardIndex].tokens[tokenIndex].y = maxY;
        } else if (currentY + distanceY < 0) {
          draft[cardIndex].tokens[tokenIndex].y = 0;
        } else {
          draft[cardIndex].tokens[tokenIndex].y += distanceY;
        }
      }),
    });
  }

  @Action(AddTokenOnAgenda)
  public addTokenOnAgenda(
    { getState, patchState, setState }: StateContext<ArkhamStateModel>,
    { payload }: AddTokenOnAgenda,
  ) {
    const { cardId, tokenId, posXRelative, posYRelative } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);

    const deckState = getState()[Container[deckId]];
    const tokenIndex = deckState[cardIndex].tokens.findIndex(t => t.tokenId === tokenId);

    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        if (draft[cardIndex].tokens[tokenIndex].qty === 0) {
          draft[cardIndex].tokens[tokenIndex].x = posXRelative - 30;
          draft[cardIndex].tokens[tokenIndex].y = posYRelative - 30;
        }
        draft[cardIndex].tokens[tokenIndex].qty += 1;
      }),
    });
  }

  @Action(AddToken)
  public addToken({ getState, patchState, setState }: StateContext<ArkhamStateModel>, { payload }: AddToken) {
    const { cardId, tokenId, posXRelative, posYRelative } = payload;
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);

    const deckState = getState()[Container[deckId]];
    const tokenIndex = deckState[cardIndex].tokens.findIndex(t => t.tokenId === tokenId);

    patchState({
      [Container[deckId]]: produce(deckState, (draft: any) => {
        if (draft[cardIndex].tokens[tokenIndex].qty === 0) {
          draft[cardIndex].tokens[tokenIndex].x = posXRelative - 30;
          draft[cardIndex].tokens[tokenIndex].y = posYRelative - 30;
        }
        draft[cardIndex].tokens[tokenIndex].qty += 1;
      }),
    });
  }

  @Action(PopulateDeck)
  public populateDeck({ getState, patchState }: StateContext<ArkhamStateModel>, { payload }: PopulateDeck) {
    const state = getState()[payload.deckId];

    patchState({
      [payload.deckId]: produce(state, (draft: any) => {
        draft.splice(0, draft.length, ...payload.deck);
      }),
    });
  }

  @Action(MoveItemInArray)
  public moveItemInArray({ getState, patchState }: StateContext<ArkhamStateModel>, { payload }: any) {
    const { deckTargetId, currentIndex, previousIndex, cardId, extraData } = payload;
    if (deckTargetId === 'encounter-deck' || deckTargetId === 'encounter-discard') {
      return;
    }
    const state = getState()[Container[deckTargetId]];

    patchState({
      [Container[deckTargetId]]: produce(state, (draft: any) => {
        const card = draft.splice(previousIndex, 1)[0];
        draft.splice(currentIndex, 0, card);
      }),
    });
  }

  @Action(TransferArrayItem)
  public transferArrayItem({ getState, patchState }: StateContext<ArkhamStateModel>, { payload }: any) {
    const { cardId, deckTargetId, deckSourceId, currentIndex, previousIndex, extraData } = payload;
    console.log('payload:', payload);
    const isFromNavItem = deckTargetId.slice(-3) === 'nav';
    const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);

    if (Container[deckSourceId] === Container[deckTargetId] && deckSourceId !== 'location-threat') {
      return;
    } else if (deckTargetId === 'location-threat-nav' && deckSourceId === 'location-threat') {
      const stateSource = getState()[Container[deckSourceId]];
      const { deckId, cardIndex } = this.findCardInDeck(getState(), cardId);
      patchState({
        [Container[deckSourceId]]: produce(stateSource, (draft: any) => {
          draft[cardIndex].current_location = extraData;
        }),
      });
      return;
    }

    const stateTarget = getState()[Container[deckTargetId]];
    const stateSource = getState()[Container[deckSourceId]];

    let card = stateSource[cardIndex];
    if (deckTargetId === 'location-threat-nav' || deckTargetId === 'location-threat') {
      card = produce(card, (draft: any) => {
        draft.current_location = extraData;
      });
    } else {
      card = produce(card, (draft: any) => {
        draft.current_location = '';
      });
    }

    patchState({
      [Container[deckSourceId]]: produce(stateSource, (draft: any) => {
        draft.splice(cardIndex, 1);
      }),
      [Container[deckTargetId]]: produce(stateTarget, (draft: any) => {
        draft.splice(currentIndex, 0, card);
      }),
    });
  }
}
