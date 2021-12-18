import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwipeProfilePage } from './swipe-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SwipeProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwipeProfilePageRoutingModule {}
