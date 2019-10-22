import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService {



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') === "True") {
      return next.handle(req.clone());
    }

    if (localStorage.getItem('token') != null) {
      let token = localStorage.getItem('token');
      const clonedreq = req.clone({
        headers: req.headers.set("Authorization", token)
      });
      return next.handle(clonedreq);


    }




  }
}