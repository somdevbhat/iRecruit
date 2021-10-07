import { OauthService } from '../oauth/oauth.service';
import { Component, OnInit } from '@angular/core';
//import { AppConstants } from '../app.constants';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  templateUrl: './loginUser.html',
  styleUrls: ['./loginUser.css'],
  outputs: ['responseData'],
  providers: [OauthService]

})
export class LoginComponent implements OnInit {
  fullImagePath: string;
  loginUser = new User();

  constructor(private oauthService: OauthService, private router: Router) {
    this.fullImagePath = 'assets/images/logo.png';
  }

  ngOnInit(): void {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('Me');
  }

  login(){
    this.oauthService.obtainAccessToken(this.loginUser);
  }

}
