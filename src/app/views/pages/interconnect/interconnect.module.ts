import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterconnectListComponent } from './interconnect-list/interconnect-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    component: InterconnectListComponent,
  },

];



@NgModule({
  declarations: [InterconnectListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class InterconnectModule { }
