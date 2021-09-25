import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PswdRecoveryPage } from './pswd-recovery.page';

const routes: Routes = [
  {
    path: '',
    component: PswdRecoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PswdRecoveryPageRoutingModule {}
