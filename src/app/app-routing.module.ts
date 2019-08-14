import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/containers/home/home.component';

export const routes: Routes = [
  {
    path: 'newgame',
    loadChildren: () => import('./new-game/new-game.module').then(mod => mod.NewGameModule),
  },
  {
    path: 'play',
    loadChildren: () => import('./play-area/play-area.module').then(mod => mod.PlayAreaModule),
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
