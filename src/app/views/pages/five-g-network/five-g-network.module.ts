import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveGNetworkListComponent } from './five-g-network-list/five-g-network-list.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [


  {
    path: '',
    component: FiveGNetworkListComponent,
  },

];


@NgModule({
  declarations: [FiveGNetworkListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FiveGNetworkModule { }
