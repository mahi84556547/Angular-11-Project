import { AuthService } from './../SHARED/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

constructor(public service: AuthService, public router: Router){}
// tslint:disable-next-line: typedef
async canActivate(route, state: RouterStateSnapshot): Promise<boolean>  {
  if (this.service.isLoggeedIn()) {
   return true;
  }
  // otherwise redirect user to login page and return false
  this.router.navigate(['/login']);

  // console.log(state.url); // returns '/dashboard'
  return false;
}
}
