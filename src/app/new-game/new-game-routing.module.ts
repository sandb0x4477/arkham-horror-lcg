import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGameComponent } from './containers/new-game/new-game.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '', component: NewGameComponent,
    // children: [
    //   { path: 'campaign', component: TestComponent },
    // ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewGameRoutingModule { }
