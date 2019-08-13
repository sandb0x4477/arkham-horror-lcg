import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { States } from './store';

import { NewGameRoutingModule } from './new-game-routing.module';
import { NewGameComponent } from './containers/new-game/new-game.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [NewGameComponent, TestComponent],
  imports: [
    CommonModule,
    NewGameRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxsModule.forFeature(States),
  ]
})
export class NewGameModule { }
