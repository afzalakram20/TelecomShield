import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileCareListComponent } from './mobile-care-list/mobile-care-list.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: MobileCareListComponent,
  },

];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MobileCareModule { }
