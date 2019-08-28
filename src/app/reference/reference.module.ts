import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReferenceComponent } from './containers/reference/reference.component';

const routes: Routes = [
  {
    path: '',
   component: ReferenceComponent,
  },
];

@NgModule({
  declarations: [ReferenceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ReferenceModule { }
