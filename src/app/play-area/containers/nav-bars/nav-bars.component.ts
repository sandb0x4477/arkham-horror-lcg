import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bars',
  templateUrl: './nav-bars.component.html',
  styleUrls: ['./nav-bars.component.scss'],
})
export class NavBarsComponent implements OnInit {
  @Input() navBarsStatus: any;
  @Input() countedDecks: any;
  @Output() command = new EventEmitter<any>();

  //#region Configs
  hand0NavConfig = [
    {
      displayName: 'Deck',
      id: 'hand0-deck-nav',
      navBarId: 'hand0-navbar',
      navBarStyle: { gridTemplateColumns: 'repeat(4, 110px)' },
      activeItem: 'activeNavItemHand0',
    },
    {
      displayName: 'Hand',
      id: 'hand0-hand-nav',
    },
    {
      displayName: 'Discard',
      id: 'hand0-discard-nav',
    },
    {
      displayName: 'Spare',
      id: 'hand0-spare-nav',
    },
  ];

  hand1NavConfig = [
    {
      displayName: 'Deck',
      id: 'hand1-deck-nav',
      navBarId: 'hand1-navbar',
      navBarStyle: { gridTemplateColumns: 'repeat(4, 110px)' },
      activeItem: 'activeNavItemHand1',
    },
    {
      displayName: 'Hand',
      id: 'hand1-hand-nav',
    },
    {
      displayName: 'Discard',
      id: 'hand1-discard-nav',
    },
    {
      displayName: 'Spare',
      id: 'hand1-spare-nav',
    },
  ];

  play0NavConfig = [
    {
      displayName: 'In Play',
      id: 'play0-inplay-nav',
      navBarId: 'play0-navbar',
      navBarStyle: { gridTemplateColumns: 'repeat(4, 110px)' },
      activeItem: 'activeNavItemPlay0',
    },
    {
      displayName: 'Discard',
      id: 'play0-discard-nav',
    },
    {
      displayName: 'Victory',
      id: 'play0-victory-nav',
    },
    {
      displayName: 'Spare',
      id: 'play0-spare-nav',
    },
  ];

  play1NavConfig = [
    {
      displayName: 'In Play',
      id: 'play1-inplay-nav',
      navBarId: 'play1-navbar',
      navBarStyle: { gridTemplateColumns: 'repeat(4, 110px)' },
      activeItem: 'activeNavItemPlay1',
    },
    {
      displayName: 'Discard',
      id: 'play1-discard-nav',
    },
    {
      displayName: 'Victory',
      id: 'play1-victory-nav',
    },
    {
      displayName: 'Spare',
      id: 'play1-spare-nav',
    },
  ];

  threat0NavConfig = [
    {
      displayName: 'Threats',
      id: 'threat0-threats-nav',
      navBarId: 'threat0-navbar',
      navBarStyle: { gridTemplateColumns: 'repeat(2, 159px)' },
      activeItem: 'activeNavItemThreat0',
    },
    {
      displayName: 'Out of Play',
      id: 'threat0-outofplay-nav',
    },
  ];

  threat1NavConfig = [
    {
      displayName: 'Threats',
      id: 'threat1-threats-nav',
      navBarId: 'threat1-navbar',
      navBarStyle: { gridTemplateColumns: 'repeat(2, 159px)' },
      activeItem: 'activeNavItemThreat1',
    },
    {
      displayName: 'Out of Play',
      id: 'threat1-outofplay-nav',
    },
  ];

  encounter0NavConfig = [
    {
      displayName: 'Encounter',
      id: 'encounter0-encounter-nav',
      navBarId: 'encounter0-navbar',
      navBarStyle: { gridTemplateColumns: 'repeat(2, 105px)' },
      activeItem: 'activeNavItemEncounter0',
    },
    {
      displayName: 'Discard',
      id: 'encounter0-discard-nav',
    },
  ];
  //#endregion

  constructor() {}

  ngOnInit() {}

  onCommand(event: any) {
    this.command.emit(event);
  }

  onNavItemClick(event: any) {
    this.command.emit(event);
  }
}
