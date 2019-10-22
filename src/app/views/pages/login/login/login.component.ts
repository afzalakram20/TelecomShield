import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.services';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private service: LoginService, private toastr: ToastrService,
    private route: Router) { }

  ngOnInit() {

    this.form = this.fb.group({
      userName: [],
      password: [],

    });



  }
  login() {
    let userName = this.form.get('userName').value;
    let password = this.form.get('password').value;

    this.service.userAuthentication(userName, password).subscribe((res: any) => {
      if (res.success) {
        this.route.navigate(['/admin/dashboard']);
        localStorage.setItem('token', res.access_token); name
        localStorage.setItem('name', res.name);
      }
      else {
        this.toastr.error("Error", res.message);
      }


    },
      (err: HttpErrorResponse) => {
        this.toastr.error("Error", "Error Occured");


      }
    );
  }



}