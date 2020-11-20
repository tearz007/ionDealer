import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardPage } from '../card/card.page';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
