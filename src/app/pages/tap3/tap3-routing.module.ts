import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tap3Page } from './tap3.page';

const routes: Routes = [
  {
    path: '',
    component: Tap3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tap3PageRoutingModule {}
