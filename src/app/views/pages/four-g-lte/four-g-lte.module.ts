import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourGLteListComponent } from './four-g-lte-list/four-g-lte-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    component: FourGLteListComponent,
  },

];



@NgModule({
  declarations: [FourGLteListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FourGLteModule { }
