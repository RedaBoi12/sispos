import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth, public router: Router) { }
  loggedIn:any = [];


  SignIn(value:any){
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.loggedIn.email = value.email;
        this.loggedIn.password = value.password;
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  SignOut(){
    signOut(this.auth).then(() => {
      this.router.navigate(['']);
    }).catch((error) => {
      // An error happened.
    });
  }
}