import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest, AuthenticationResponse } from 'src/gs-api/src/models';
import { AuthenticationService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  login(authenticationRequest: AuthenticationRequest){
      return this.authenticationService.authenticate(authenticationRequest)
     
  }
}
