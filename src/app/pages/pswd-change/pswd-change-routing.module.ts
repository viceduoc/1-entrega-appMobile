import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PswdChangePage } from './pswd-change.page';

const routes: Routes = [
  {
    path: '',
    component: PswdChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PswdChangePageRoutingModule {}
