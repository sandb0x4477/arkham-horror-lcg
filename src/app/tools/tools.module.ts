import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolsComponent } from './containers/tools.component';
import { ToolsChaosBagComponent } from './components/tools-chaos-bag/tools-chaos-bag.component';
import { AddCardComponent } from './components/add-card/add-card.component';

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent,
  },
];

@NgModule({
  declarations: [ToolsComponent, ToolsChaosBagComponent, AddCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    // NgxsModule.forFeature(States),
  ],
  providers: [],
})
export class ToolsModule {}
