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
    if(this.isLoginMode){
      this.authObs = this.authService.login(email,password) as Observable<authResponseData>;

    }
    else {
      this.authObs = this.authService.SignUp(email,password) as Observable<authResponseData>;
      /*this.authService.SignUp(email,password).subscribe(resData =>{
        console.log(typeof(resData));

      },
      errorData => {
        this.error = errorData;
      })*/
      this.authForm.reset();
    }
    this.authObs.subscribe(resData =>{
      console.log(resData);
      console.log("authenticated");
      this.router.navigate(['home']);
    },
    errorData => {
      this.error = errorData;
    });

  }
}
