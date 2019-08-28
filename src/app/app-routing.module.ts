import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/containers/home/home.component';
import { InProgressGuard } from './shared/guards/in-progress.guard';

export const routes: Routes = [
  {
    path: 'newgame',
    loadChildren: () => import('./new-game/new-game.module').then(mod => mod.NewGameModule),
    // canActivate: [InProgressGuard],
  },
  {
    path: 'play',
    loadChildren: () => import('./play-area/play-area.module').then(mod => mod.PlayAreaModule),
    canActivate: [InProgressGuard],
  },
  {
    path: 'tools',
    loadChildren: () => import('./tools/tools.module').then(mod => mod.ToolsModule),
    canActivate: [InProgressGuard],
  },
  {
    path: 'reference',
    loadChildren: () => import('./reference/reference.module').then(mod => mod.ReferenceModule),
    // canActivate: [InProgressGuard],
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
