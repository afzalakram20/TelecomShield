import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule, MatCardModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';


const routes: Routes = [


  {
    path: '',
    component: LoginComponent,
  },

];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatInputModule,
    RouterModule,
    MatCardModule,
    ToastrModule.forRoot(),
  ]
})
export class LoginModule { }
