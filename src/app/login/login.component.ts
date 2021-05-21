import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../services/auth/basic-authentication.service';
import { HardcodedAuthenticationService } from '../services/auth/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title='User Login'
  username = '';
  password = '';
  error = 'Invalid credential';
  isInvalidLogin = false;

  constructor(
    private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuth: BasicAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.isInvalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    }else {
      this.isInvalidLogin = true;
    }
  }

  handleBasicAuthentication(): void {
    this.basicAuth.executeJWTAuthenticationService(this.username, this.password).subscribe(
      data=> {
        console.log(data);
        this.isInvalidLogin = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.isInvalidLogin = true;
      }
    );
  }
}
