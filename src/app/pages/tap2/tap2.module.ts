import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tap2PageRoutingModule } from './tap2-routing.module';

import { Tap2Page } from './tap2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tap2PageRoutingModule
  ],
  declarations: [Tap2Page]
})
export class Tap2PageModule {}
