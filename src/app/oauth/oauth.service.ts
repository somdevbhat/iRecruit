import { Injectable, ErrorHandler } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppConstants } from '../app.constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw'

@Injectable()
export class OauthService{

  private appData = AppConstants;
  //private oauthUrl = this.appData.appUrl + 'oauth/token?grant_type=password&username=';
  private oauthUrl = '/irecruit/' + 'oauth/token?grant_type=password&username=';
  private logUrl = '/irecruit/login';
  private oauthRefreshUrl = this.appData.appUrl + 'oauth/token?grant_type=refresh_token&refresh_token=';
  private getLoggedUserUrl = this.appData.appUrl + 'me' ;
  private TOKEN = 'token';
  private token = {accessToken: '', expiresIn: 0};

  constructor(private router: Router, private http: Http) {
  }

  obtainAccessToken(user){
    let headers = new Headers();
    headers.append("Authorization","Basic aXJlY3J1aXQtc2VydmljZToxMjNvc2kxMjM=");
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.oauthUrl + user.userName + '&password=' + user.password,"", options)
    .map(res => res.json())
    .subscribe(
      data => {
        this.saveToken(data);
        this.router.navigate(['/profiles']);
        },
      err => alert('Invalid Credentials')
    );
  }
  
  private handleError(error: any): Promise<any> {
    alert('An error occurred'+error);
    return Promise.reject(error.message || error); 
  }

  private saveToken(data){
    let token = this.getTokenFromParams(data);
    window.localStorage.setItem(this.TOKEN, JSON.stringify(token));
  }

  private getTokenFromParams(params) {
    let token = params.access_token;
    let expiresIn = params.expires_in;
    let currentEpochTime = ((new Date)).getTime();
    let expirationPeriodInMilliseconds = expiresIn * 1000;
    return {'value': token, 'expirationTime': currentEpochTime + expirationPeriodInMilliseconds,
             'refreshToken': params.refresh_token};
  }

  private getToken() {
    let token = JSON.parse(window.localStorage.getItem(this.TOKEN));
    if(token!=null || token!=undefined){
        return token.value;
    }
  }

  private saveLoggedUser(data){
    window.localStorage.setItem('Me', JSON.stringify(data));
  }
}
