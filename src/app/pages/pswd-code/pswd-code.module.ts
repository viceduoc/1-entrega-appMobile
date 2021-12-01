import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PswdCodePageRoutingModule } from './pswd-code-routing.module';

import { PswdCodePage } from './pswd-code.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PswdCodePageRoutingModule
  ],
  declarations: [PswdCodePage]
})
export class PswdCodePageModule {}
