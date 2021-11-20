import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserUpdatePageRoutingModule } from './user-update-routing.module';

import { UserUpdatePage } from './user-update.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserUpdatePageRoutingModule
  ],
  declarations: [UserUpdatePage, FooterComponent]
})
export class UserUpdatePageModule {}
