import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import {take,exhaustMap } from "rxjs/operators";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService:AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return this.authService.user.pipe(take(1), exhaustMap(user => {
            if(!user) {
                return next.handle(req);
            }
            const modifiedRequest = req.clone({
                params: new HttpParams().set('auth',user._token)
            });
            return next.handle(modifiedRequest);
        }));
    }
}