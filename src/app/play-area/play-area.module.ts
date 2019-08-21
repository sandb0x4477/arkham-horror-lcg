import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndModule } from 'ngx-drag-drop';
import { LightboxModule } from 'ngx-lightbox';

import { TruncatePipe } from '../shared/pipes/truncate.pipe';

import { GameMainComponent } from './game-main.component';
import { AgendaActComponent } from './containers/agenda-act/agenda-act.component';
import { ChaosBagsComponent } from './containers/chaos-bags/chaos-bags.component';
import { DifficultyCardsComponent } from './containers/difficulty-cards/difficulty-cards.component';
import { EncounterComponent } from './containers/encounter/encounter.component';
import { Hand0Component } from './containers/hand0/hand0.component';
import { Hand1Component } from './containers/hand1/hand1.component';
import { InvestigatorsComponent } from './containers/investigators/investigators.component';
import { LocationThreatComponent } from './containers/location-threat/location-threat.component';
import { NavBarsComponent } from './containers/nav-bars/nav-bars.component';
import { NavLocationsComponent } from './containers/nav-locations/nav-locations.component';
import { Play0Component } from './containers/play0/play0.component';
import { Play1Component } from './containers/play1/play1.component';
import { PortraitsComponent } from './containers/portraits/portraits.component';
import { ThreatsComponent } from './containers/threats/threats.component';
import { TokensComponent } from './containers/tokens/tokens.component';

// ? COMPONENTS
import { CardArkhamComponent } from './components/card-arkham/card-arkham.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '', component: GameMainComponent,
  },
];

@NgModule({
  declarations: [
    TruncatePipe,
    GameMainComponent,
    AgendaActComponent,
    ChaosBagsComponent,
    DifficultyCardsComponent,
    EncounterComponent,
    Hand0Component,
    Hand1Component,
    InvestigatorsComponent,
    LocationThreatComponent,
    NavBarsComponent,
    NavLocationsComponent,
    Play0Component,
    Play1Component,
    PortraitsComponent,
    ThreatsComponent,
    TokensComponent,
    CardArkhamComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    DndModule,
    LightboxModule,
    RouterModule.forChild(routes),
  ]
})
export class PlayAreaModule { }
