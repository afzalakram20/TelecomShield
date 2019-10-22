import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaServeicesListComponent } from './mega-serveices-list/mega-serveices-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    component: MegaServeicesListComponent,
  },

];



@NgModule({
  declarations: [MegaServeicesListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MegaServicesModule { }
