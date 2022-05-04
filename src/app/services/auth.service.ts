import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth, public router: Router) { }
  loggedIn: any = [];


  SignIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.loggedIn.email = email;
        this.loggedIn.password = password;
        this.router.navigate(['dashboard']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Connected as: ${email}!`,
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `Error: ${errorMessage}`,
          showConfirmButton: false,
          timer: 1500
        })
      });
  }

  SignOut() {
    signOut(this.auth).then(() => {
      this.router.navigate(['']);
    }).catch((error) => {
      // An error happened.
    });
  }
}