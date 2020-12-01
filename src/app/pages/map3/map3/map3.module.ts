import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Map3PageRoutingModule } from './map3-routing.module';

import { Map3Page } from './map3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Map3PageRoutingModule
  ],
  declarations: [Map3Page]
})
export class Map3PageModule {}
