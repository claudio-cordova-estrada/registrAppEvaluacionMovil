import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiaContraPageRoutingModule } from './cambia-contra-routing.module';

import { CambiaContraPage } from './cambia-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiaContraPageRoutingModule
  ],
  declarations: [CambiaContraPage]
})
export class CambiaContraPageModule {}
