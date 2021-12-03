import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PswdRecoveryPageRoutingModule } from './pswd-recovery-routing.module';

import { PswdRecoveryPage } from './pswd-recovery.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PswdRecoveryPageRoutingModule
  ],
  declarations: [PswdRecoveryPage]
})
export class PswdRecoveryPageModule {}
