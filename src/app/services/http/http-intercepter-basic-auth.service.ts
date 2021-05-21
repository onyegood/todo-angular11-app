import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../auth/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuth: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'onyegood';
    // let password = 'password';
    // let basicAuthHttpHeaderString = 'Basic '+ window.btoa(username + ':' + password);

    let basicAuthHttpHeaderString = this.basicAuth.getAuthenticatedToken();
    let username = this.basicAuth.getAuthenticatedUser();

    if (basicAuthHttpHeaderString && username) {
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHttpHeaderString
        }
      });
    }


    return next.handle(request);
  }
}
