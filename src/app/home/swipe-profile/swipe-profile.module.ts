import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwipeProfilePageRoutingModule } from './swipe-profile-routing.module';

import { SwipeProfilePage } from './swipe-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipeProfilePageRoutingModule
  ],
  declarations: [SwipeProfilePage]
})
export class SwipeProfilePageModule {}
