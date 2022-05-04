import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public aservice: AuthService) { }
  loginForm!: FormGroup;

  //REMOVE THIS LOGIN WHEN SETTING INTO PRODUCTION
  DEFlogin: string = 'admin@sispos.ma';
  DEFpassword: string = 'sispos123';
  //REMOVE THIS LOGIN WHEN SETTING INTO PRODUCTION


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'login': new FormControl(this.DEFlogin),
      'password': new FormControl(this.DEFpassword)
    })
  }


  login() {
    this.aservice.SignIn(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value);
  }

}
