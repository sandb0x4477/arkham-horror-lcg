import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NewGameRoutingModule } from './new-game-routing.module';
import { NewGameComponent } from './containers/new-game/new-game.component';
import { SelectCampaignComponent } from './components/select-campaign/select-campaign.component';
import { SelectScenarioComponent } from './components/select-scenario/select-scenario.component';
import { SelectInvComponent } from './components/select-inv/select-inv.component';
import { ListInvsComponent } from './components/list-invs/list-invs.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { PublicFormComponent } from './components/public-form/public-form.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    NewGameComponent,
    SelectCampaignComponent,
    SelectScenarioComponent,
    SelectInvComponent,
    ListInvsComponent,
    DeckListComponent,
    PublicFormComponent,
    IntroComponent,
  ],
  imports: [
    CommonModule,
    NewGameRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class NewGameModule {}
