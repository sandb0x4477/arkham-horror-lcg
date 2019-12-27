import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app.component';
import { HomeComponent } from './containers/home/home.component';
import { MenuBarComponent } from './containers/menu-bar/menu-bar.component';
import { ProgressCardComponent } from './containers/progress-card/progress-card.component';

export const COMPONENTS = [
  AppComponent,
  HomeComponent,
  MenuBarComponent,
  ProgressCardComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule, RouterModule],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
