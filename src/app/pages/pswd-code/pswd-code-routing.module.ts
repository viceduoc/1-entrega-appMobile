import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PswdCodePage } from './pswd-code.page';

const routes: Routes = [
  {
    path: '',
    component: PswdCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PswdCodePageRoutingModule {}
