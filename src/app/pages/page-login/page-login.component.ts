import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationRequest } from 'src/gs-api/src/models/authentication-request';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  authenticationRequest: AuthenticationRequest = {};

    constructor(
      private userService: UserService,
      private router: Router
    ) { }

    ngOnInit(): void {
    }

    login(){
      this.userService.login(this.authenticationRequest);
    }
    
}
