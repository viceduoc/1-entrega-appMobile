import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PswdChangePageRoutingModule } from './pswd-change-routing.module';

import { PswdChangePage } from './pswd-change.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PswdChangePageRoutingModule
  ],
  declarations: [PswdChangePage, FooterComponent]
})
export class PswdChangePageModule {}
