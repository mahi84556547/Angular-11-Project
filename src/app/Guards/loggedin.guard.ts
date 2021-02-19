import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../SHARED/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {

  constructor(public service: AuthService, public router: Router){}
  // tslint:disable-next-line: typedef
  canActivate(): boolean {
    if (this.service.isLoggeedIn()) {
        this.router.navigate(['/home']);
        return false;
    } else {
        return true;
    }
}
}
