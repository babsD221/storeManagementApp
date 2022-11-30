import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, authResponseData } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { CurrentUser } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  isLoginMode:boolean = true;
  error: string;
  authObs = new Observable<authResponseData>;

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });
  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwithMode() {
    this.isLoginMode= !this.isLoginMode
  }
  onSubmit() {
    const email= this.authForm.value.email!;
    const password = this.authForm.value.password!;
      this.authObs = this.authService.login(email,password) as Observable<authResponseData>;

    this.authObs.subscribe(() =>{
      this.router.navigate(['home']);
    },
    errorData => {
      this.error = errorData;
    });

  }
}
