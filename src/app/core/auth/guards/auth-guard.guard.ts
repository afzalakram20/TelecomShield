import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private _route: Router) {

  }

  canActivate(): boolean {

    if (this.isLogIn()) {
      return true;
    }
    else {
      this._route.navigate(['/login']);
      return false;
    }
  }

  isLogIn() {
    let gg = !!localStorage.getItem('token')
    return gg;
  }


}
