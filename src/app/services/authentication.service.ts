import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CurrentUser } from '../models/user.model';
import { Router } from '@angular/router';

interface User{
  _delegate: any;
  _multiFactor:any;
}
export interface authResponseData {
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user= new BehaviorSubject<any>(null);
  private autoExpirationTimer:any;
  constructor(private afAuth: AngularFireAuth, private router: Router) { 

  }

  handleAuthentication(email: string, password: string,userId: string, token: string,expiresIn:number) {

    const expireDate = new Date(new Date().getTime() + expiresIn);
    const currentUser = new CurrentUser(email,userId,token,expireDate);
    this.user.next(currentUser);
    this.autoLogout(expiresIn);
    localStorage.setItem('userData',JSON.stringify(currentUser));
  }
  login(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password))
    .pipe(this.handleError(),tap(resData =>{
      let data = <authResponseData> resData;
      const expiresIn = data.user._delegate.stsTokenManager.expirationTime;
      const email = data.user._delegate.email;
      const userId = data.user._delegate.uid;
      const refreshToken = data.user._delegate.refreshToken;

      this.handleAuthentication(email, password, userId,refreshToken,expiresIn);
    }));
  }

  SignUp(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email,password))
    .pipe(this.handleError(),tap(resData =>{
      let data = <authResponseData> resData;
      const expiresIn = data.user._delegate.stsTokenManager.expirationTime;
      const email = data.user._delegate.email;
      const userId = data.user._delegate.uid;
      const refreshToken = data.user._delegate.refreshToken;

      this.handleAuthentication(email, password, userId,refreshToken,expiresIn);
    }));
  }
  handleError() {
    return catchError(errorResp =>{
      let errorMessage = 'An unknow error occurred!';
      if(!errorResp.error || !errorResp.error.error) {
        return throwError(errorMessage);
      } 
      switch(errorResp.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exist';
      }
      return throwError(errorMessage);
    });
  }

  autoLogin(){
    const userData: {
      email:string,
      id:string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData')!);
    if(!userData) {
      return;
    }
    const loadedUser = new CurrentUser(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));
    this.user.next(loadedUser);
    const expirationTime = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
    this.autoLogout(expirationTime);
  }

  logout() {
    if(this.user) {
      this.user.next(null);
      this.router.navigate(['auth']);
      localStorage.removeItem('userData');
      if(this.autoExpirationTimer) {
        clearTimeout(this.autoExpirationTimer);
      }
      this.autoExpirationTimer = null;
    }

  }

  autoLogout(expirationDuration: number) {
    this.autoExpirationTimer = setTimeout(this.logout,expirationDuration)

  }

}
