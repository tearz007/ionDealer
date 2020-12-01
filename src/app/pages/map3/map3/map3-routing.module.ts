import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Map3Page } from './map3.page';

const routes: Routes = [
  {
    path: '',
    component: Map3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Map3PageRoutingModule {}
