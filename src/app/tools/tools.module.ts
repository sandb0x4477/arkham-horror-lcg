import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import {States} from './store';

import { ToolsComponent } from './containers/tools.component';
import { CardsDbService } from './services/cards-db.service';

const routes: Routes = [
  {
    path: '', component: ToolsComponent,
  },
];

@NgModule({
  declarations: [ToolsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature(States),
  ],
  providers: [CardsDbService],
})
export class ToolsModule { }
