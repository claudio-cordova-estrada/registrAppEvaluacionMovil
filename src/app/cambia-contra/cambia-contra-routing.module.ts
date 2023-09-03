import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiaContraPage } from './cambia-contra.page';

const routes: Routes = [
  {
    path: '',
    component: CambiaContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiaContraPageRoutingModule {}
