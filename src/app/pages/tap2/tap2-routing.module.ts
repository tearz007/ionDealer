import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tap2Page } from './tap2.page';

const routes: Routes = [
  {
    path: '',
    component: Tap2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tap2PageRoutingModule {}
