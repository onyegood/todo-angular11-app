import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    if (username === 'onyegood' && password === 'password') {
      sessionStorage.setItem("auth", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn () {
    let user = sessionStorage.getItem('auth');
    return !(user === null);
  }

  logout () {
    sessionStorage.removeItem('auth');
  }
}
