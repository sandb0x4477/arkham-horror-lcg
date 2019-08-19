import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

import { Card } from '../shared/models/card.model';
import { ArkhamState } from './store/arkham.state';
import {
  AddToken,
  MoveToken,
  RemoveToken,
  TransferArrayItem,
  NavBarSwitch,
  MoveItemInArray,
  LocationSwitch,
  ChangeDifficulty,
  ExhaustCard,
  FlipCard,
  FlipDeck,
  ShuffleDeck,
  PreviousCard,
  NextCard,
  DropOnLocNav,
  RemoveCard,
} from './store/arkham.actions';
import { ScenarioData } from '../shared/models/scenario.data.model';
import { SettingsState } from '../new-game/store/settings.state';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss'],
})
export class GameMainComponent implements OnInit {
  @Select(ArkhamState.getCountedDecks) countedDecks$: Observable<any>;

  @Select((state: any) => state.arkham.navBarsStatus) navBarsStatus$: Observable<any>;

  @Select((state: any) => state.arkham.encounter0Deck) encounter0Deck$: Observable<Card[]>;
  @Select((state: any) => state.arkham.encounter0Discard) encounter0Discard$: Observable<Card[]>;

  @Select((state: any) => state.arkham.threat0Threats) threat0Threats$: Observable<Card[]>;
  @Select((state: any) => state.arkham.threat0Outofplay) threat0Outofplay$: Observable<Card[]>;
  @Select((state: any) => state.arkham.threat1Threats) threat1Threats$: Observable<Card[]>;
  @Select((state: any) => state.arkham.threat1Outofplay) threat1Outofplay$: Observable<Card[]>;

  @Select((state: any) => state.arkham.hand0Deck) hand0Deck$: Observable<Card[]>;
  @Select((state: any) => state.arkham.hand0Hand) hand0Hand$: Observable<Card[]>;
  @Select((state: any) => state.arkham.hand0Discard) hand0Discard$: Observable<Card[]>;
  @Select((state: any) => state.arkham.hand0Spare) hand0Spare$: Observable<Card[]>;

  @Select((state: any) => state.arkham.hand1Deck) hand1Deck$: Observable<Card[]>;
  @Select((state: any) => state.arkham.hand1Hand) hand1Hand$: Observable<Card[]>;
  @Select((state: any) => state.arkham.hand1Discard) hand1Discard$: Observable<Card[]>;
  @Select((state: any) => state.arkham.hand1Spare) hand1Spare$: Observable<Card[]>;

  @Select((state: any) => state.arkham.play0Inplay) play0Inplay$: Observable<Card[]>;
  @Select((state: any) => state.arkham.play0Discard) play0Discard$: Observable<Card[]>;
  @Select((state: any) => state.arkham.play0Victory) play0Victory$: Observable<Card[]>;
  @Select((state: any) => state.arkham.play0Spare) play0Spare$: Observable<Card[]>;

  @Select((state: any) => state.arkham.play1Inplay) play1Inplay$: Observable<Card[]>;
  @Select((state: any) => state.arkham.play1Discard) play1Discard$: Observable<Card[]>;
  @Select((state: any) => state.arkham.play1Victory) play1Victory$: Observable<Card[]>;
  @Select((state: any) => state.arkham.play1Spare) play1Spare$: Observable<Card[]>;

  @Select((state: any) => state.arkham.locations) locations$: Observable<Card[]>;
  @Select((state: any) => state.arkham.currentLocation) currentLocation$: Observable<string>;
  @Select((state: any) => state.arkham.locationThreat) locationThreat$: Observable<Card[]>;

  @Select((state: any) => state.arkham.investigators) investigators$: Observable<Card[]>;

  @Select((state: any) => state.arkham.agendaDeck) agendaDeck$: Observable<Card[]>;
  @Select((state: any) => state.arkham.actDeck) actDeck$: Observable<Card[]>;

  @Select((state: any) => state.arkham.difficultyCard) difficultyCard$: Observable<string>;
  @Select((state: any) => state.arkham.chaosBag) chaosBag$: Observable<number[]>;

  constructor(private store: Store, private lightbox: Lightbox, private lighboxConfig: LightboxConfig) {
    lighboxConfig.centerVertically = true;
    lighboxConfig.fadeDuration = 0.3;
    lighboxConfig.resizeDuration = 0.3;
    lighboxConfig.enableTransition = true;
  }

  ngOnInit() {}

  openLightbox(card: Card): void {
    console.log('card => ', card);
    const image = card.faceUp ? card.imagesrc : card.backimagesrc;

    // open lightbox
    const tempCard = [{ thumb: image, src: image }];
    this.lightbox.open(tempCard);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

  onCommand(payload: any) {
    console.log('onCommand payload => ', payload);
    switch (payload.commandId) {
      case 'addToken':
        console.log('Executing AddToken');
        this.store.dispatch(new AddToken(payload));
        break;

      case 'moveToken':
        console.log('Executing MoveToken');
        this.store.dispatch(new MoveToken(payload));
        break;

      case 'removeToken':
        console.log('Executing RemoveToken');
        this.store.dispatch(new RemoveToken(payload));
        break;

      case 'cdkDrop':
        console.log('Executing cdkDrop');
        const { event, extraData } = payload;
        if (event.previousContainer.id === event.container.id) {
          console.log('MoveItem:', event);
          const payload = {
            cardId: event.item.data,
            deckTargetId: event.container.id,
            previousIndex: event.previousIndex,
            currentIndex: event.currentIndex,
          };
          this.store.dispatch(new MoveItemInArray(payload));
        } else {
          console.log('TrasferItem:', event);
          const payload = {
            cardId: event.item.data,
            deckTargetId: event.container.id,
            deckSourceId: event.previousContainer.id,
            previousIndex: event.previousIndex,
            currentIndex: event.currentIndex,
            extraData,
          };
          // console.log('cdkPayload => ', payload);
          this.store.dispatch(new TransferArrayItem(payload));
        }
        break;

      case 'cdkDropOnLocNav':
        console.log('Executing Drop On Loc Nav');
        // console.log(JSON.stringify(payload, null, 2));
        this.store.dispatch(new DropOnLocNav(payload));
        break;

      case 'navItemSwitch':
        console.log('Executing NavItemSwitch');
        const navbarSwitch = {
          navItemId: payload.navItemId,
          navBarId: payload.navBarId,
        };
        this.store.dispatch(new NavBarSwitch(navbarSwitch));
        break;

      case 'locationNavSwitch':
        console.log('Executing LocationNavSwitch');
        this.store.dispatch(new LocationSwitch(payload.locationId));
        break;

      case 'exhaustCard':
        console.log('Executing Exhaust Card');
        this.store.dispatch(new ExhaustCard(payload));
        break;

      case 'flipCard':
        console.log('Executing Flip Card');
        this.store.dispatch(new FlipCard(payload));
        break;

      case 'flipDeck':
        console.log('Executing Flip Deck');
        this.store.dispatch(new FlipDeck(payload));
        break;

      case 'shuffleDeck':
        console.log('Executing Shuffle Deck');
        this.store.dispatch(new ShuffleDeck(payload));
        break;

      case 'previousCard':
        console.log('Executing Previous Card');
        this.store.dispatch(new PreviousCard(payload));
        break;

      case 'nextCard':
        console.log('Executing Next Card');
        this.store.dispatch(new NextCard(payload));
        break;

      case 'removeCard':
        console.log('Executing Remove Card');
        this.store.dispatch(new RemoveCard(payload));
        break;

      case 'zoomCard':
        // console.log('onCommand payload => ', payload);

        this.openLightbox(payload.cardId);
        break;
    }
  }
}
