import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PswdChangePageRoutingModule } from './pswd-change-routing.module';

import { PswdChangePage } from './pswd-change.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PswdChangePageRoutingModule
  ],
  declarations: [PswdChangePage]
})
export class PswdChangePageModule {}
