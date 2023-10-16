import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('AuthGuard: canActivate is called');
    const isAuthenticated = this.authService.isAuthenticated();
    console.log('AuthGuard: isAuthenticated', isAuthenticated);

    if (isAuthenticated) {
      console.log('User is authenticated. Proceeding to the route.');
      return true;
    } else {
      console.log('User is not authenticated. Redirecting to login page.');
      this.router.navigate(['/home-page/login']);
      return false;
    }
  }

}
