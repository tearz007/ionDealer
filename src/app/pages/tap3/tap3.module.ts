import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tap3PageRoutingModule } from './tap3-routing.module';

import { Tap3Page } from './tap3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tap3PageRoutingModule
  ],
  declarations: [Tap3Page]
})
export class Tap3PageModule {}
