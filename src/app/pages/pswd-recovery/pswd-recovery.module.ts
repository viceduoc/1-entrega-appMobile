import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PswdRecoveryPageRoutingModule } from './pswd-recovery-routing.module';

import { PswdRecoveryPage } from './pswd-recovery.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PswdRecoveryPageRoutingModule
  ],
  declarations: [PswdRecoveryPage, FooterComponent]
})
export class PswdRecoveryPageModule {}
