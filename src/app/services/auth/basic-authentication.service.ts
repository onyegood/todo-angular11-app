import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthResponse } from 'src/app/models/AuthResponse';
import { SERVER_BASE_URL } from '../data/constants';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  executeJWTAuthenticationService(username: string, password: string) {
    let requestBody = {
      username,
      password,
    };
    return this.http
      .post<AuthResponse>(SERVER_BASE_URL + '/authenticate', requestBody)
      .pipe(
        map((data) => {
          sessionStorage.setItem('auth', username);
          sessionStorage.setItem('token', `Bearer ${data.token}`);
          return data;
        })
      );
  }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http
      .get<AuthResponse>(SERVER_BASE_URL + '/basicauth', { headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem('auth', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('auth');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) return sessionStorage.getItem('token');
    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('auth');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('auth');
    sessionStorage.removeItem('token');
  }
}
