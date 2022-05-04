import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogged: boolean = false;
  constructor(private afAuth: Auth, public router: Router){
    
  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    const isAuthentificated = user ? true : false;
    if (!isAuthentificated){
      this.router.navigate(['']);
      this.isLogged = false;
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Please login to view!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    return isAuthentificated;

  }
  
}
