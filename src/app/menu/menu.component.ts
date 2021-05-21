import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/auth/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isAuthenticated: boolean = false;

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    // this.isAuthenticated = this.isAuth.isUserLoggedIn();
  }

}
